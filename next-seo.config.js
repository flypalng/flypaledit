/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Flypal ng',
  titleTemplate: '%s | Airline Solutions',
  defaultTitle: 'Flypal ng',
  description: 'Airline solutions',
  canonical: 'https://flypal.ng',
  openGraph: {
    url: 'https://flypal.ng',
    title: 'Flypal ng',
    description: 'Airline solutions',
    images: [
      {
        url: '/assets/logowhite.png',
        alt: 'Flypal ng',
      },
    ],
    site_name: 'Flypal ng',
  },
  twitter: {
    handle: '@sozonome',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
