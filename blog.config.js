const BLOG = {
  title: "VicYa's Blog",
  author: 'potato1949',
  authorAvatar: '/avatar.jpeg',
  email: 'v@vicya.com',
  defaultImageHost: 'images.vicya.com',
  link: 'https://www.vicya.com',
  description: '写写文章的地方',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  dateFormat: 'YYYY-MM-DD',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2024, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/ycjcl',
  seo: {
    keywords: ['Blog', 'Website', 'vicya', '博客'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  isPreviewImageSupportEnabled: false,
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  gitalkClientID: process.env.GITALK_CLIENT_ID,
  gitalkClientSecret: process.env.GITALK_CLIENT_SECRET,
  giscusRepoId: process.env.GISCUS_REPO_ID,
  giscusCategoryId: process.env.GISCUS_CATEGORY_ID,
  analytics: {
    providers: [], // Currently we support Google Analytics and Ackee, please fill with 'ga' or '', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    cnzzConfig: {
      id: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

BLOG.comment = {
  // support provider: gitalk, utterances, cusdis, giscus
  provider: 'giscus', // leave it empty if you don't need any comment plugin
  gitalkConfig: {
    repo: 'blog', // The repository of store comments
        owner: '',
        admin: [''],
        clientID: '',
        clientSecret: '',
        distractionFreeMode: false,
        proxy: ''
  },
  utterancesConfig: {
    repo: ''
  },
  cusdisConfig: {
    appId: '349ea56f-3b8c-4017-a1be-49415221cf42', // data-app-id
        host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
        scriptSrc: 'https://cusdis.com/js/cusdis.umd.js', // change this if you're using self-hosted version
        autoApproval: true // auto approval comments
  }
}

// export default BLOG
module.exports = BLOG
