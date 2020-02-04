/* eslint no-unused-vars:0 no-process-exit:0 */
const Task = require('data.task');
const { writeFile } = require('fs');

class Either {
  constructor(value) {
    this.value = value;
  }
}

class Left extends Either {
  map() {
    return this;
  }
}

class Right extends Either {
  map(f) {
    return new Right(f(this.value));
  }
}

const either = (errorAction) => (successAction) => (result) => {
  if (result instanceof Left) {
    return errorAction(result.value);
  }

  if (result instanceof Right) {
    return successAction(result.value);
  }

  return new Left('');
};

const showInternalError = () => {
  console.log('Sorry, we couldn\'t create the file');
};

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const buildPackageJSON = ({
  packageName, version, description, entryPoint, testCommand,
  repository, keywords, author, license,
}) => (`{
  "name": "${packageName}",
  "version": "${version || '1.0.0'}",
  "description": "${description}",
  "main": "${entryPoint || 'index.js'}",
  "scripts": {
    "test": "${testCommand || "echo 'Error: no test specified' && exit 1"}"
  },
  "repository": "${repository}",
  "keywords": "${keywords}",
  "author": "${author}",
  "license": "${license || 'ISC'}"
}`);

const prompt = (previousData) => new Task((rej, res) => (
  rl.question('> ', (text) => res({ text, previousData }))
));

const speak = (string) => new Task((rej, res) => res(console.log(string)));

const generatePackage = (packageAsString) => (
  speak(`${packageAsString}
    
Is this OK? (yes)
  `).chain((_) => prompt(packageAsString))
);

const mountPackage = ({ text: license, previousData }) => (
  generatePackage(buildPackageJSON({ license, ...previousData }))
);

const getLicense = ({ text: author, previousData }) => (
  speak('license: (ISC)').chain((_) => prompt({ author, ...previousData }))
    .chain(mountPackage)
);

const getAuthor = ({ text: keywords, previousData }) => (
  speak('author:').chain((_) => prompt({ keywords, ...previousData }))
    .chain(getLicense)
);

const getKeywords = ({ text: repository, previousData }) => (
  speak('keywords:').chain((_) => prompt({ repository, ...previousData }))
    .chain(getAuthor)
);

const getRepository = ({ text: testCommand, previousData }) => (
  speak('git repository:').chain((_) => prompt({ testCommand, ...previousData }))
    .chain(getKeywords)
);

const getTestCommand = ({ text: entryPoint, previousData }) => (
  speak('test command:').chain((_) => prompt({ entryPoint, ...previousData }))
    .chain(getRepository)
);

const getEntryPoint = ({ text: description, previousData }) => (
  speak('entry point: (index.js)').chain((_) => prompt({ description, ...previousData }))
    .chain(getTestCommand)
);

const getDescription = ({ text: version, previousData }) => (
  speak('description:').chain((_) => prompt({ version, ...previousData }))
    .chain(getEntryPoint)
);

const getVersion = ({ text: packageName, previousData }) => (
  speak('version: (1.0.0)').chain((_) => prompt({ packageName, ...previousData }))
    .chain(getDescription)
);

const getPackageName = (
  speak('package name:').chain((_) => prompt({}))
    .chain(getVersion)
);

const npmInitApp = getPackageName;

const writePackage = (packageJSON) => new Task((rej, res) => (
  writeFile('./my-package.json', packageJSON, (error) => {
    if (error) return rej(error);

    return res();
  })
));

const closeReadLine = () => {
  rl.close();
};

const writePackageAndFinish = (packageData) => (
  writePackage(packageData).fork(showInternalError, () => {
    console.log('File created, enjoy :p');

    process.exit(0);
  })
);

const checkUserConfirmation = ({
  text: createResponse, previousData: packageAsString,
}) => (
  [ 'yes', 'y' ].includes(createResponse.toLowerCase())
        || createResponse === ''
)
  ? new Right(packageAsString)
  : new Left('');

npmInitApp.fork(showInternalError, (userConfirmation) => (
  either(closeReadLine)(writePackageAndFinish)(checkUserConfirmation(userConfirmation))
));
