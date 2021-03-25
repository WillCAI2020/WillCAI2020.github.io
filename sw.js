const workboxVersion="6.1.1";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b308780f2ac2029f86d2c2ad2526b2d3",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"efe8dfa5da952907953dc6b9a4802a17",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"00a4938a5eee97bec0565d6e79dfc659",url:"./bing.json"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"b08093b2efba47f354a90be29d221f86",url:"./css/main.css"},{revision:"2e7bd3b686787073ab7cc80ad6560685",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"e3045c379328feae77eaf6002754e941",url:"./js/bubble.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"405e7dadf8bfd239498681fdfd13875f",url:"./js/hullabaloo.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"15b3a9d288acc5b021b4d3b24b5c3061",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"338b7987287e052bb217470ee6c10ed4",url:"./js/mikutap.min.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"f7af9a63ed2c82f13cd15944a1b05ae2",url:"./js/sidecar.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"29c68602c268753213467ae2e4a08704",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"c33c2c261879cd4d163672d0a7cf3676",url:"./lib/live2d-widget/autoload.js"},{revision:"222058c2ba64afeacf14e0a092f12a91",url:"./lib/live2d-widget/demo/demo.html"},{revision:"3ebe0948553975549e8fa127b1c3fed0",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"2ff382d8936f3d34b16ed43ae6a94e77",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"76fd4aed133ee61d927fc6c3f6e5a099",url:"./lib/live2d-widget/waifu.css"},{revision:"3bd74957afb28b494cc3ac593ad93302",url:"./links/index.html"},{revision:"7369a8583ea4c2629ac5fbc7ee7a00c8",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"c9156d2fe7635beea068871cacff1bbb",url:"./more/album/index.html"},{revision:"dcaa46b965cf4687b566efa55fb5956f",url:"./more/album/photo.html"},{revision:"1d9f582306f366969a5b8d0febb5982d",url:"./more/album/picture.html"},{revision:"eac91cdd24ad629a7a1bc6440ac9b482",url:"./more/index.html"},{revision:"dd03dbaa671f629f0cfb82429120cb40",url:"./more/tool/about.html"},{revision:"1cb4f00f74aea44f4096eadf9af854e1",url:"./more/tool/christmas-cannon_script.js"},{revision:"85012f976c5371066c56f047506f727d",url:"./more/tool/christmas-cannon.html"},{revision:"f5faf7aa6f1c680e4501d902a37147d0",url:"./more/tool/color-copy_ common-use.html"},{revision:"246f690930a8c54e0fb56395d9a3414a",url:"./more/tool/dd.html"},{revision:"7223644bf1624d76603be1531ff03bc5",url:"./more/tool/gjxq.html"},{revision:"08af215db2c2713ffa3d0afc6e2758a7",url:"./more/tool/index.html"},{revision:"8158dc1448b3e368e12716560f6bf3b9",url:"./more/tool/main.json"},{revision:"e4adb58caa2f67d3690276b975d54062",url:"./more/tool/mf.html"},{revision:"204818957612ee2e17bcc80024d68539",url:"./more/tool/tank.html"},{revision:"5d0429503aeea2eef666af9e7c360988",url:"./more/tool/track.json"},{revision:"1e82784ddbd048426f3b492c5113d2b4",url:"./more/tool/viewaudio.html"},{revision:"5d38de9e0e25a1a12ff746bd0d58947f",url:"./more/tool/yinhe.html"},{revision:"30f529b5fb1d1489a1e4ab67b773f2a2",url:"./more/tool/yszq.html"},{revision:"9bbfe65188b04f956a461f9c1759ddc4",url:"./overview/blog/index.html"},{revision:"82985672516e575a1e84304c43769526",url:"./overview/code/index.html"},{revision:"590feae02947266fe630102e882b48c5",url:"./overview/index.html"},{revision:"652a5fae0b678ba6bceb93d2098858b7",url:"./overview/tags/bat/index.html"},{revision:"1af990d6e5ac8c39c7335b75ff346165",url:"./overview/tags/git/index.html"},{revision:"df89f91dcc3122a3bd5dd869d11a0464",url:"./overview/tags/hexo/index.html"},{revision:"525ef2b10b25cd3cf3e6a85f193404aa",url:"./overview/tags/index.html"},{revision:"2f207b463d7f6e417a6dbbb748fbdbce",url:"./overview/tags/java/index.html"},{revision:"50ce668f3fd3c037a96986b59b058a89",url:"./overview/tags/next/index.html"},{revision:"ce3424a1632c72bbe2182d71712199a3",url:"./overview/tags/notes/index.html"},{revision:"c90c7332bf3def84cb53607dc0b7108b",url:"./overview/tags/record/index.html"},{revision:"9615d6ec67af4482156719338dbeb4a4",url:"./overview/timeline/2021/02/index.html"},{revision:"306f3ed95c7e669e8aaa628b167ef4b3",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"51e1f3a083a970f657e4ccff7c975b7c",url:"./overview/timeline/2021/03/index.html"},{revision:"5ba841c7d6248d5209b294f6f74b06f3",url:"./overview/timeline/2021/index.html"},{revision:"458fc508cad0bdff626218c626c9e13a",url:"./overview/timeline/2021/page/2/index.html"},{revision:"a98125a1e2e82b83a50f938280964df9",url:"./overview/timeline/index.html"},{revision:"adcd935eac559de7758143af1b558f67",url:"./overview/timeline/page/2/index.html"},{revision:"982f87ed65871247de8da4476fe4277f",url:"./page/2/index.html"},{revision:"a24d40eb97d647061f79333ee5d9c522",url:"./posts/2021/1/index.html"},{revision:"841045fb2199a5425ef8946a41154b24",url:"./posts/2021/10/index.html"},{revision:"b7a7156137c522a11b4e42fc47a7a877",url:"./posts/2021/11/index.html"},{revision:"c4bbee07e59be51a848e65bd97d800d6",url:"./posts/2021/12/index.html"},{revision:"7073121a70cbf4057891c8204d6095d1",url:"./posts/2021/2/index.html"},{revision:"500985260958ac04c8f87de0fed1e892",url:"./posts/2021/3/index.html"},{revision:"da31f796338aab523f3859540664a7cf",url:"./posts/2021/4/index.html"},{revision:"f8b3785e32ee3536766c9b4048449a9c",url:"./posts/2021/5/index.html"},{revision:"51c9fcd51fe8bbc187386600691fda50",url:"./posts/2021/6/index.html"},{revision:"aafc300f785431a11e9521dd82dccc1a",url:"./posts/2021/7/index.html"},{revision:"e9005bb32a5bbc2c2fe02dff9d799433",url:"./posts/2021/8/index.html"},{revision:"b4bc834dedfb10ddfbc177062461da30",url:"./posts/2021/9/index.html"},{revision:"962ce2ccb67a7a03fa87cd37d976470a",url:"./posts/2021/java1/index.html"},{revision:"a8ee86c2efe3681c509af1cbcf7fcc90",url:"./posts/2021/java2/index.html"},{revision:"88e0bb48d615df445a73b9c2039b7dce",url:"./posts/2021/java3/index.html"},{revision:"d18ca04733ef14aee8c59b6b203ed2cf",url:"./talk/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();