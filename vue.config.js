module.exports = {
  pwa: {
    manifestOptions: {
      name: "Vue PWA",
      short_name: "Vue PWA",
      start_url: "./",
      display: "standalone",
      theme_color: "#42b983",
      background_color: "#42b983",
      icons: [
        {
          src: "logo.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    iconPaths: {
      faviconSVG: 'logo.png',
      favicon32: 'logo.png',
      favicon16: 'logo.png',
      appleTouchIcon: 'logo.png',
      maskIcon: 'logo.png',
      msTileImage: 'logo.png'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-pwa/' : '/'
};