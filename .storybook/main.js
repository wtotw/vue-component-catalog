const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { _configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    });
  },
}