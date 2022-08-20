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
  siteLogo: `src/static/ailogo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  googleAnalyticsID: 'UA-237300065-1',
  // Manifest
  themeColor: '#f06529',
  backgroundColor: '#f06529',
};

module.exports = website;
