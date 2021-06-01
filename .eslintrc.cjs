module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	plugins: ["svelte3", "@typescript-eslint", "prettier"],
	//ignorePatterns: ['*.cjs'],
	overrides: [
		{ files: ["*.svelte"], processor: "svelte3/svelte3" },
		{
			files: ["*.js", "*.cjs", ".mjs", "*.ts", "*.json"],
			extends: ["plugin:prettier/recommended"],
		},
	],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2019,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
