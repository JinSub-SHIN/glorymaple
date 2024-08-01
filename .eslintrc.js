module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12, 
		sourceType: 'module', 
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {		
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], // should add ".ts" if typescript project
	},
}
