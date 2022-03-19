// eslint-disable-next-line no-undef
module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:react/recommended",
	],
	parser: "@babel/eslint-parser",
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	globals: {
		chrome: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		requireConfigFile: "false",
	},
	rules: {
		"no-console": 2,
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx"],
			},
		},
	},
}
