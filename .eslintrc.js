module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-filename-extension': ['error', {
            extensions: ['.tsx'],
        }],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase'],
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
        ],
        '@typescript-eslint/indent': ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'no-implicit-globals': 'error',
        'default-case': 'off',
        'no-restricted-syntax': 'off',
        curly: ['error', 'multi'],
        'nonblock-statement-body-position': ['error', 'below'],
        'object-curly-newline': ['error', {
            'ObjectExpression': {
                multiline: true,
                consistent: true,
            },
            'ObjectPattern': {
                multiline: true,
            },
            'ImportDeclaration': {
                multiline: false,
                consistent: true,
            },
            'ExportDeclaration': {
                multiline: true,
                minProperties: 0,
            },
        }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'eol-last': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
    },
};
