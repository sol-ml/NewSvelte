module.exports = {
	"*.{css,html,svg}": ["prettier --write --plugin-search-dir=."],
	"*.{js,cjs,mjs,ts,json,svelte}": [
		//--plugin parameter required to work with pnpm
		"prettier --write --plugin-search-dir=.",
		"eslint --ignore-path .gitignore --fix",
	],
	"*.svelte": ["svelte-check --tsconfig ./tsconfig.json"],
};
