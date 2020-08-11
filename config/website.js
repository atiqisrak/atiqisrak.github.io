const meta = {
  // Metadata
  siteTitle: 'Atiq Israk - Creative Web Designer',
  siteDescription:
    'Atiq Israk - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Atiq Israk',
  siteShortName: 'Atiq Israk',
  siteUrl: 'https://atiqisrak.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'anuraghazra',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
