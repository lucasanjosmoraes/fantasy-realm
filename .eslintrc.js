module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src'
        ]
      }
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    // Blacklist
    'no-void': 'error',
    'no-inline-comments': 'error',
    'no-var': 'error',
    'no-caller': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],
    'no-lone-blocks': 'error',
    'no-multi-spaces': [
      'error',
      { ignoreEOLComments: false }
    ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'req',
          'res',
        ]
      }
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': [ 'error', 'always' ],
    'no-return-await': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }
    ],
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-warning-comments': [
      'error',
      { terms: [ 'todo', 'fixme', 'xxx' ], location: 'anywhere' }
    ],
    'no-with': 'error',
    'no-useless-rename': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': [ 'error', 'always' ],
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-useless-return': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-else-return': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      }
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': [ 'error', {
      groups: [
        [ '%', '**' ],
        [ '%', '+' ],
        [ '%', '-' ],
        [ '%', '*' ],
        [ '%', '/' ],
        [ '/', '*' ],
        [ '&', '|', '<<', '>>', '>>>' ],
        [ '==', '!=', '===', '!==' ],
        [ '&&', '||' ],
      ],
      allowSamePrecedence: false
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 1, maxEOF: 0 } ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      'ForStatement',
      'LabeledStatement',
      'WithStatement',
      'SwitchStatement',
      'WhileStatement',
    ],
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      }
    ],
    'no-unneeded-ternary': [
      'error',
      { defaultAssignment: false }
    ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside',
      { overrides: {} }
    ],
    'no-buffer-constructor': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-sync': 'error',
    'functional/no-return-void': 'error',
    'global-require': 'error',
    'block-scoped-var': 'error',
    'default-param-last': 'error',
    'radix': 'error',
    'array-callback-return': [ 'error', { allowImplicit: true } ],
    'eqeqeq': [ 'error', 'always', { null: 'ignore' } ],

    // Style
    'camelcase':  [ 'error', { ignoreDestructuring: true } ],
    'dot-location': [ 'error', 'property' ],
    'yoda': 'error',
    'vars-on-top': 'error',
    'curly': [ 'error', 'multi-line' ],
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'brace-style': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
      }
    ],
    'template-curly-spacing': 'error',
    'yield-star-spacing': [ 'error', 'after' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'block-spacing': [ 'error', 'always' ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      }
    ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        }
      }
    ],
    'computed-property-spacing': [ 'error', 'never' ],
    'eol-last': [ 'error', 'always' ],
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'func-call-spacing': [ 'error', 'never' ],
    'function-paren-newline': [ 'error', 'consistent' ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 2,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
      }
    ],
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    'line-comment-position': [ 'error', { 'position': 'above' }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false }
    ],
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      }
    ],
    'max-depth': [ 'error', 10 ],
    'max-len': [
      'error',
      300,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: true,
      }
    ],
    'max-lines': [ 'error', { max: 300 } ],
    'multiline-comment-style': [ 'error', 'starred-block' ],
    'multiline-ternary': [ 'error', 'always-multiline' ],
    'new-cap': [ 'error', {
      newIsCap: true,
      capIsNew: false,
      capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ],
    }],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 } ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      }
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    'operator-linebreak': [
      'error',
      'before',
      { overrides: { '=': 'none' } },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      }
    ],
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: false,
        numbers: false
      }
    ],
    'quotes': [
      'error',
      'single',
      { avoidEscape: true }
    ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'semi-style': [ 'error', 'last' ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
        minKeys: 10,
      }
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],
    'spaced-comment': [ 'error', 'always', {
      line: {
        exceptions: [ '-', '+'],
        markers: [ '=', '!'],
      },
      block: {
        exceptions: [ '-', '+' ],
        markers: [ '=', '!', ':', '::' ],
        balanced: true,
      }
    }],
    'switch-colon-spacing': [ 'error', { after: true, before: false } ],
    'template-tag-spacing': [ 'error', 'never' ],

    // Funcional
    'complexity': [ 'error', 6 ],
    'max-params': [ 'error', 3 ],
    'max-lines-per-function': [
      'warn',
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      }
    ],
    'max-statements': [ 'warn', 50 ],
    'functional/prefer-readonly-type': 'error',

    // Best practices
    'require-await': 'error',
    'semi': [ 'error', 'always' ],
    'use-isnan': 'error',
    'valid-typeof': [ 'error', { requireStringLiterals: true } ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'symbol-description': 'error',
    'max-statements-per-line': [ 'error', { max: 1 } ],
    'new-parens': 'error',
    'newline-before-return': 'error',
    'one-var': [ 'error', 'never' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'operator-assignment': [ 'error', 'always' ],
    'prefer-object-spread': 'error',
    'unicode-bom': [ 'error', 'never' ],
    'handle-callback-err': 'warn',
  },
  plugins: [ 'functional' ],
};
