import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
	stories: [
	'../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
	'../app/**/*.stories.@(js|jsx|ts|tsx|mdx)'
	],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
};

export default config;