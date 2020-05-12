module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'Diarme',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'indigo',

    favicon32: 'img/icons/favicon-32x32.png',
    favicon16: 'img/icons/favicon-16x16.png',
    appleTouchIcon: 'img/icons/apple-touch-icon.png',
    maskIcon: 'img/icons/safari-pinned-tab.svg',
    msTileImage: 'img/icons/msapplication-icon-144x144.png',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
  },
};
