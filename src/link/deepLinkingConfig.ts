export const deepLinkingConfig = {
  prefixes: ['holme://', 'https://holme.com', 'http://holme.com'],
  config: {
    screens: {
      //* Apply Linking specs in here. ex: screens, endpoints.
      Main: 'main', //* Command Id: 0 - normal, 1 - open sync modal
      Loading: 'loading',
    },
  },
};
