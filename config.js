const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://github.com/Blockits/Wallet-docs',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/Blockits/Wallet-docs/main/src/assets/img/icon-34.png',
    logoLink: 'https://github.com/Blockits/Wallet-docs',
    title:
      "<a href='https://github.com/Blockits/Wallet-docs'><img class='img-responsive' src='' alt='Wallet logo' /></a>",
    githubUrl: 'https://github.com/Blockits/Wallet-docs',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/kEvinItMe" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/kEvinItMe" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Wallet', link: 'https://github.com/Blockits/Wallet' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://github.com/Blockits/Wallet-docs'>graphql </a><div class='greenCircle'></div><a href='https://github.com/Blockits/Wallet-docs'>react</a>",
  },
  siteMetadata: {
    title: 'Wallet',
    description: 'Documentation built with mdx. Power for Wallet',
    ogImage: null,
    docsLocation: 'https://github.com/Blockits/Wallet-docs/tree/main/content',
    favicon: 'https://raw.githubusercontent.com/Blockits/Wallet-docs/main/src/assets/img/icon-34.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/assets/img/icon-128.png',
          sizes: `128x128`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
