const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Zorin's Spiritual World",

  description: "se shin te ki na se kai",

  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/PikaSama/blog-static-customs@latest/hexo/images/icon.png' }],
  ],

  host: '127.0.0.1',

  base: "/",

  dest: "./dist",

  evergreen: true,

  themeConfig: {
    logo: "https://cdn.jsdelivr.net/gh/PikaSama/blog-static-customs@latest/hexo/images/icon.png",

    hostname: "https://zorin.beaa.cn",

    wordPerminute: 500,

    search: false,

    algolia: {
      appId: '41EH41X49T',
      apiKey: '974c575ebbeae9384ef0db9c4080999b',
      indexName: 'blog',
    },
    searchPlaceholder: '搜索',

    copyCode: {
      showInMobile: true,
    },

    nav: [
      {
        text: '主页',
        icon: 'home',
        link: '/',
      },
      {
        text: '项目',
        items: [
          {
            text: 'spider-manga',
            link: 'https://github.com/pikasama/spider-manga',
          },
          {
            text: 'spider-checkupdate',
            link: 'https://github.com/pikasama/spider-checkupdate',
          },
        ],
      },
      {
        text: '文档',
        items: [
          {
            text: 'spider-manga',
            link: '/docs/spider-manga/',
          },
          {
            text: 'spider-checkupdate',
            link: '/docs/spider-checkupdate/',
          },
        ],
      },
      {
        text: '关于',
        link: '/intro/'
      },
    ],

    sidebar: {
      "/": [
          "",
      ],
    },

    footer: {
      display: true,
      content: "本站由<a href='https://www.upyun.com'>又拍云</a>提供CDN加速服务",
      copyright: '博客文章均采用 CC BY-NC-SA 4.0 协议，转载请注明来源！',
    },

    author: "Zorin",

    blog: {
      avatar: "https://cdn.jsdelivr.net/gh/PikaSama/blog-static-customs@latest/vuepress/images/avatar3.png",
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        QQ: 'https://wpa.qq.com/msgrd?v=3&uin=2108586824&site=qq&menu=yes',
        Github: "https://github.com/pikasama",
        Gmail: 'mailto:pikasama@qq.com',
      },
    },

    comment: {
      type: "vssue",
      platform: 'githubv4',
      owner: 'PikaSama',
      repo: 'pikasama.github.io',
      clientId: '59258488241b180edfe2',
      clientSecret: '2535c954a66db961db91e8dcba49be2b86852890',
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      // please only enable the features you need
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    repo: "https://github.com/pikasama/pikasama.github.io",
    repoLabel: "Github",
  },
});
