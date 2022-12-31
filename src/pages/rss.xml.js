import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Orgs that work!',
  description: 'Questioning the status quo and transforming the organizations to make them work, spiced with values.',
  site: 'https://orgs-that-work.netlify.app',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});