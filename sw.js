const workboxVersion="6.1.1";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b308780f2ac2029f86d2c2ad2526b2d3",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"efe8dfa5da952907953dc6b9a4802a17",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"00a4938a5eee97bec0565d6e79dfc659",url:"./bing.json"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"fb20a22e4333cd0fd944326f94dac501",url:"./css/main.css"},{revision:"1b5d84ac88f90dcf2ff0199ac536a128",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"e3045c379328feae77eaf6002754e941",url:"./js/bubble.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"405e7dadf8bfd239498681fdfd13875f",url:"./js/hullabaloo.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"15b3a9d288acc5b021b4d3b24b5c3061",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"338b7987287e052bb217470ee6c10ed4",url:"./js/mikutap.min.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"f7af9a63ed2c82f13cd15944a1b05ae2",url:"./js/sidecar.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"e018e65cbfb49e6d1abbe3a4b6530e52",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"c33c2c261879cd4d163672d0a7cf3676",url:"./lib/live2d-widget/autoload.js"},{revision:"da44463b71128156d65bb3357fb5f939",url:"./lib/live2d-widget/demo/demo.html"},{revision:"fcac5b6da1436928910c77cf77a4ce04",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"b710335c144aa47959d80c1c6966c3c6",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"76fd4aed133ee61d927fc6c3f6e5a099",url:"./lib/live2d-widget/waifu.css"},{revision:"8d273af6be2c502a2563f3a18fe6da6e",url:"./links/index.html"},{revision:"7369a8583ea4c2629ac5fbc7ee7a00c8",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"66f8267b7c486fc768bb42f5058a0490",url:"./more/album/index.html"},{revision:"dcaa46b965cf4687b566efa55fb5956f",url:"./more/album/photo.html"},{revision:"1d9f582306f366969a5b8d0febb5982d",url:"./more/album/picture.html"},{revision:"79a0b2547bea89f2e421a9b09c5f5990",url:"./more/bb/index.html"},{revision:"53acdea9fce85ed28388a1aad83ec1d8",url:"./more/index.html"},{revision:"dd03dbaa671f629f0cfb82429120cb40",url:"./more/tool/about.html"},{revision:"1cb4f00f74aea44f4096eadf9af854e1",url:"./more/tool/christmas-cannon_script.js"},{revision:"85012f976c5371066c56f047506f727d",url:"./more/tool/christmas-cannon.html"},{revision:"f5faf7aa6f1c680e4501d902a37147d0",url:"./more/tool/color-copy_ common-use.html"},{revision:"246f690930a8c54e0fb56395d9a3414a",url:"./more/tool/dd.html"},{revision:"7223644bf1624d76603be1531ff03bc5",url:"./more/tool/gjxq.html"},{revision:"08af215db2c2713ffa3d0afc6e2758a7",url:"./more/tool/index.html"},{revision:"8158dc1448b3e368e12716560f6bf3b9",url:"./more/tool/main.json"},{revision:"e4adb58caa2f67d3690276b975d54062",url:"./more/tool/mf.html"},{revision:"204818957612ee2e17bcc80024d68539",url:"./more/tool/tank.html"},{revision:"5d0429503aeea2eef666af9e7c360988",url:"./more/tool/track.json"},{revision:"1e82784ddbd048426f3b492c5113d2b4",url:"./more/tool/viewaudio.html"},{revision:"5d38de9e0e25a1a12ff746bd0d58947f",url:"./more/tool/yinhe.html"},{revision:"30f529b5fb1d1489a1e4ab67b773f2a2",url:"./more/tool/yszq.html"},{revision:"a2cab90f6d6837b92f35228a30fcd1a3",url:"./overview/blog/index.html"},{revision:"5ae6976d694cb9b76e8ac676faa8aff7",url:"./overview/code/index.html"},{revision:"72ab6c80325b61b78deb0ffaf0e26dd5",url:"./overview/index.html"},{revision:"f99e2fd2a9183c778161dbaafa95e66a",url:"./overview/tags/bat/index.html"},{revision:"67b41353719b09543c366edcf7999929",url:"./overview/tags/git/index.html"},{revision:"18adf98e2513cd1a56f5ec56ef7fc4f6",url:"./overview/tags/hexo/index.html"},{revision:"ac2345c4e93921db9a3528a17c28a81a",url:"./overview/tags/index.html"},{revision:"5863e5296dfdc1a099912cb395ce585e",url:"./overview/tags/java/index.html"},{revision:"7cd62b3eac2533f8ce1ed07c445e83e9",url:"./overview/tags/next/index.html"},{revision:"bd8ee49d8f954cc5ffe3ec68f3ce4842",url:"./overview/tags/notes/index.html"},{revision:"4954862b07e3f3e00bb0ec4e72b25f93",url:"./overview/tags/record/index.html"},{revision:"7708107aabac300898a139ef57273e11",url:"./overview/timeline/2021/02/index.html"},{revision:"eea3089b2efc14c519b01230537401fb",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"4aa3bdfd295a9cce364e6a87d94a6bab",url:"./overview/timeline/2021/03/index.html"},{revision:"2de3e1f024b8b6eea2deb8a1c3bca1e6",url:"./overview/timeline/2021/index.html"},{revision:"6ffeee68690a05efd3b5f9253b44339d",url:"./overview/timeline/2021/page/2/index.html"},{revision:"1aa18553fef18403757213f15e68528d",url:"./overview/timeline/index.html"},{revision:"94ffc4d60a1a0dfa2fc3c9ce281e88e1",url:"./overview/timeline/page/2/index.html"},{revision:"6d0974b20b613870798bff38b006883a",url:"./page/2/index.html"},{revision:"f282475877711ac494aa6ce34a9af522",url:"./posts/2021/1/index.html"},{revision:"a93c74109a870f2e2d9ff6d81c0b7204",url:"./posts/2021/10/index.html"},{revision:"7e60d8b8a18100ba877c891133330475",url:"./posts/2021/11/index.html"},{revision:"18c3c021df946ce68d72e822fa0cca33",url:"./posts/2021/12/index.html"},{revision:"73b859947d0a44a2541263a8d760dd45",url:"./posts/2021/2/index.html"},{revision:"7e20941464635554166579b2b293f6a9",url:"./posts/2021/3/index.html"},{revision:"e12e014c9e562dfd60617238042873d3",url:"./posts/2021/4/index.html"},{revision:"963bf91f2190d2e2182d24bf77563178",url:"./posts/2021/5/index.html"},{revision:"4d10de2fa682199fd5a193b93fcdcd19",url:"./posts/2021/6/index.html"},{revision:"391ef44a10be912d61195d3887ff59df",url:"./posts/2021/7/index.html"},{revision:"78f787ea90b0d667ac44e059bae1c92e",url:"./posts/2021/8/index.html"},{revision:"26440b1d30422ba9458ee6b97dc28ffd",url:"./posts/2021/9/index.html"},{revision:"4a2023a119432890964b7907e2800183",url:"./posts/2021/java1/index.html"},{revision:"15ad94159690bf33960ea425603ff6f1",url:"./posts/2021/java2/index.html"},{revision:"a8040dc4fdc6a97aa6ccb03f9059c898",url:"./posts/2021/java3/index.html"},{revision:"24d6df1456abebe63007dc28307c5f19",url:"./talk/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();