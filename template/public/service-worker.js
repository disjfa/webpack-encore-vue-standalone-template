/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

importScripts(
  "/build/precache-manifest.37e7e4c0f25ddfffdafd98e9e1eba458.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/manifest.json",
    "revision": "b5c15f7ddd30aafbde8566dca9b4df53"
  },
  {
    "url": "icon/android-chrome-144x144.png",
    "revision": "99af7c3aef9b1ebb84223a210268e324"
  },
  {
    "url": "icon/android-chrome-192x192.png",
    "revision": "b91a3d2c40956099a4eb0c1a27dcedd9"
  },
  {
    "url": "icon/android-chrome-256x256.png",
    "revision": "d4ec7e0ba6d6b58eaf29206dd23c7dbc"
  },
  {
    "url": "icon/android-chrome-36x36.png",
    "revision": "d6781a7fd3b47b8ac865fa87b06a7d44"
  },
  {
    "url": "icon/android-chrome-384x384.png",
    "revision": "949ef5e2fd5d6ccc85665c0dd956e3b1"
  },
  {
    "url": "icon/android-chrome-48x48.png",
    "revision": "81847384173c4eb99102f39673214edd"
  },
  {
    "url": "icon/android-chrome-512x512.png",
    "revision": "f62b735e2e294fc8c29bc7f0e59d1498"
  },
  {
    "url": "icon/android-chrome-72x72.png",
    "revision": "6a5853193170e19feabe7f00ebc6398c"
  },
  {
    "url": "icon/android-chrome-96x96.png",
    "revision": "9c3d8cb551049d9fd80f0b1fdab30d1e"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "ca4a6012deac7543682a9476e9a7510c"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "cc250e19e7179aacc2b3bf5dbaad69ff"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "14d18e971b462bf05eac9b85cad5d1fa"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "d359cad03627d14823b700bbf0c6b0f5"
  },
  {
    "url": "icon/apple-touch-icon-167x167.png",
    "revision": "7abeff5bc33e15fca9a31589cd0e479a"
  },
  {
    "url": "icon/apple-touch-icon-180x180.png",
    "revision": "fd365ffb45febf2441017ffa7cb7cb25"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "4c2584d151493ebd3e115a6031b8d86b"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "2c69008402e82e96a77a3c51df8d1d35"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "be39c31898fbf8db958e42a85f06075f"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "afc5ba6401c4efbb7fcfdd523c8aa269"
  },
  {
    "url": "icon/apple-touch-icon-precomposed.png",
    "revision": "fd365ffb45febf2441017ffa7cb7cb25"
  },
  {
    "url": "icon/apple-touch-icon.png",
    "revision": "fd365ffb45febf2441017ffa7cb7cb25"
  },
  {
    "url": "icon/apple-touch-startup-image-1182x2208.png",
    "revision": "61c815a19ca3c43fe7efe5c9365ebeab"
  },
  {
    "url": "icon/apple-touch-startup-image-1242x2148.png",
    "revision": "14e7124564222ccf233a8e6471de2ec1"
  },
  {
    "url": "icon/apple-touch-startup-image-1496x2048.png",
    "revision": "223cd4e9cb11436cefb0050a97290eee"
  },
  {
    "url": "icon/apple-touch-startup-image-1536x2008.png",
    "revision": "c040b4103503a67362b6c62c261bf800"
  },
  {
    "url": "icon/apple-touch-startup-image-320x460.png",
    "revision": "6a7eda7d4973a751a91a36ebbe7e6dd5"
  },
  {
    "url": "icon/apple-touch-startup-image-640x1096.png",
    "revision": "d4748324a656433fe1e52f8a9c8865e3"
  },
  {
    "url": "icon/apple-touch-startup-image-640x920.png",
    "revision": "127eb1403ec77c80d4de1e19113cb6cd"
  },
  {
    "url": "icon/apple-touch-startup-image-748x1024.png",
    "revision": "141379265d163c4ac42a6e9055d894f1"
  },
  {
    "url": "icon/apple-touch-startup-image-750x1294.png",
    "revision": "38463f70afa3311d01afd0700386c816"
  },
  {
    "url": "icon/apple-touch-startup-image-768x1004.png",
    "revision": "57775e5921282f81dea5921a213a204a"
  },
  {
    "url": "icon/coast-228x228.png",
    "revision": "13f78022f5e445e12e08834e49027e89"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "3a7adba1288ae1b307cd7f578a39c15e"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "cd3bb79b9ddb1c6d24571d0917dbeb98"
  },
  {
    "url": "icon/firefox_app_128x128.png",
    "revision": "912127929306a19582cf6a09af5eeec3"
  },
  {
    "url": "icon/firefox_app_512x512.png",
    "revision": "d1257337cc8d6e2abd8294ed0b69bbfc"
  },
  {
    "url": "icon/firefox_app_60x60.png",
    "revision": "61ac7c81e1105e0539caff641b46a404"
  },
  {
    "url": "icon/index.html",
    "revision": "26f4680e3cccedb4c63225deef39084e"
  },
  {
    "url": "icon/manifest.json",
    "revision": "3614f28eb7549bb169a751e4e5cc4992"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "99af7c3aef9b1ebb84223a210268e324"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "05a079668068b432bf5257e9e04e3c72"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "1d47a7aa5f2963474b8786f99c457cf6"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "7ee0298e4837421ebb018b6daad7ed14"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "b2ef8fb7df2a02aa1df9fbc85c28637f"
  },
  {
    "url": "icon/yandex-browser-50x50.png",
    "revision": "dbabbcd2c21e8908ae51adbff6838e74"
  },
  {
    "url": "icon/yandex-browser-manifest.json",
    "revision": "452c8b9c9fa53b203b0e42cd8933b5ec"
  },
  {
    "url": "index.html",
    "revision": "4e1848fc6dfe4e4438efbed1ce83d85f"
  },
  {
    "url": "service-worker.js",
    "revision": "8723d6633714913a033bc126b52919be"
  },
  {
    "url": "sw.js",
    "revision": "79a50ada324edb22f1b31032474687ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
