module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react']
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    plugins: [
        'react',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    rules: {
        'no-console': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'no-const-assign': 'error',
        'prefer-template': 'off',
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
