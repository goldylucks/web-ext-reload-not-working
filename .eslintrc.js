module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:react/recommended",
	],
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
	},
	rules: {
		"no-console": 2,
	},
}
