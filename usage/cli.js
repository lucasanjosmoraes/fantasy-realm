/* eslint no-unused-vars:0 */
const Task = require('data.task');

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
}) => (`
{
  "name": ${packageName},
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
}

Is this OK? (yes)
`);

const prompt = new Task((rej, res) => rl.question('>', res));

const speak = (string) => new Task((rej, res) => res(console.log(string)));

const npmInitApp = speak('package name:').chain((_) => prompt)
  .chain((packageName) => {
    return speak('version: (1.0.0)').chain((_) => prompt)
      .chain((version) => {
        return speak('description:').chain((_) => prompt)
          .chain((description) => {
            return speak('entry point: (index.js)').chain((_) => prompt)
              .chain((entryPoint) => {
                return speak('test command:').chain((_) => prompt)
                  .chain((testCommand) => {
                    return speak('git repository:').chain((_) => prompt)
                      .chain((repository) => {
                        return speak('keywords:').chain((_) => prompt)
                          .chain((keywords) => {
                            return speak('author:').chain((_) => prompt)
                              .chain((author) => {
                                return speak('license: (ISC)').chain((_) => prompt)
                                  .chain((license) => {
                                    return speak(buildPackageJSON(({
                                      packageName,
                                      version,
                                      description,
                                      entryPoint,
                                      testCommand,
                                      repository,
                                      keywords,
                                      author,
                                      license,
                                    }))).chain((_) => prompt);
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });

npmInitApp.fork(showInternalError, () => {
  rl.close();
});
