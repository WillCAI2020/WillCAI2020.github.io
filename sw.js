const workboxVersion="6.1.1";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b308780f2ac2029f86d2c2ad2526b2d3",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"efe8dfa5da952907953dc6b9a4802a17",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"00a4938a5eee97bec0565d6e79dfc659",url:"./bing.json"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"07007d160cc2de8aaf41c397b8a876bc",url:"./css/main.css"},{revision:"86d6f12e34dbb6747cf63e5ad04412dd",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"e3045c379328feae77eaf6002754e941",url:"./js/bubble.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"405e7dadf8bfd239498681fdfd13875f",url:"./js/hullabaloo.js"},{revision:"dcf1aada9cbb0d2a063ee12757c7d21c",url:"./js/journal.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"15b3a9d288acc5b021b4d3b24b5c3061",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"338b7987287e052bb217470ee6c10ed4",url:"./js/mikutap.min.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"f7af9a63ed2c82f13cd15944a1b05ae2",url:"./js/sidecar.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"6a6f435dfa96398ed9c607d8b16ff86f",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"c33c2c261879cd4d163672d0a7cf3676",url:"./lib/live2d-widget/autoload.js"},{revision:"2c431187239582586fbe05abb76f2126",url:"./lib/live2d-widget/demo/demo.html"},{revision:"bd9f6c2286c3fa85e69f803d7ba15bc6",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"db199b020094a66390bf429cb4c4c913",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"76fd4aed133ee61d927fc6c3f6e5a099",url:"./lib/live2d-widget/waifu.css"},{revision:"1d5d7aa59f711a8539c7a696b82bd05d",url:"./links/index.html"},{revision:"7369a8583ea4c2629ac5fbc7ee7a00c8",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"226552985c4e0f15b7ca9a80ce1bb000",url:"./more/album/index.html"},{revision:"dcaa46b965cf4687b566efa55fb5956f",url:"./more/album/photo.html"},{revision:"1d9f582306f366969a5b8d0febb5982d",url:"./more/album/picture.html"},{revision:"2a3253ff0ea795f048bc11a2a1a2820d",url:"./more/bb/index.html"},{revision:"019b4e67c550e1efe82c34fb33ca08e2",url:"./more/index.html"},{revision:"90a498a0c9bf975e490a4258b0c8f011",url:"./more/journal.json"},{revision:"dd03dbaa671f629f0cfb82429120cb40",url:"./more/tool/about.html"},{revision:"1cb4f00f74aea44f4096eadf9af854e1",url:"./more/tool/christmas-cannon_script.js"},{revision:"85012f976c5371066c56f047506f727d",url:"./more/tool/christmas-cannon.html"},{revision:"f5faf7aa6f1c680e4501d902a37147d0",url:"./more/tool/color-copy_ common-use.html"},{revision:"246f690930a8c54e0fb56395d9a3414a",url:"./more/tool/dd.html"},{revision:"7223644bf1624d76603be1531ff03bc5",url:"./more/tool/gjxq.html"},{revision:"08af215db2c2713ffa3d0afc6e2758a7",url:"./more/tool/index.html"},{revision:"8158dc1448b3e368e12716560f6bf3b9",url:"./more/tool/main.json"},{revision:"e4adb58caa2f67d3690276b975d54062",url:"./more/tool/mf.html"},{revision:"204818957612ee2e17bcc80024d68539",url:"./more/tool/tank.html"},{revision:"5d0429503aeea2eef666af9e7c360988",url:"./more/tool/track.json"},{revision:"1e82784ddbd048426f3b492c5113d2b4",url:"./more/tool/viewaudio.html"},{revision:"5d38de9e0e25a1a12ff746bd0d58947f",url:"./more/tool/yinhe.html"},{revision:"30f529b5fb1d1489a1e4ab67b773f2a2",url:"./more/tool/yszq.html"},{revision:"2d34ea5e1ad65c2370af30f0cfa8d0da",url:"./overview/blog/index.html"},{revision:"5c815df1c9d14057559628a254db5ea8",url:"./overview/code/index.html"},{revision:"c23e1a589fee7488bbfdb27e1b8f3447",url:"./overview/index.html"},{revision:"90c191d46294ee563068f6ae3e9b0336",url:"./overview/tags/bat/index.html"},{revision:"99b7aab48eb800116c018bbd5a4a4ca3",url:"./overview/tags/git/index.html"},{revision:"58c525452f30e897f30c926186314265",url:"./overview/tags/hexo/index.html"},{revision:"616b404d09f0be07035aa3c10150d95e",url:"./overview/tags/index.html"},{revision:"fa777aa3bb2e579acd6acfd443b4094f",url:"./overview/tags/java/index.html"},{revision:"de2a764b25c354316123c4c97bd995c2",url:"./overview/tags/next/index.html"},{revision:"c71c02101a25b72040db4ade94a4b248",url:"./overview/tags/notes/index.html"},{revision:"dba798901a5f0dfdaea658adf08f2570",url:"./overview/tags/record/index.html"},{revision:"6f93bf8721e75ec8eba14ece521f376e",url:"./overview/timeline/2021/02/index.html"},{revision:"6db3372f404c48a88de7e14656e5fda5",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"9979a267d12f53a10a1c5c92ee2fcc91",url:"./overview/timeline/2021/03/index.html"},{revision:"8d3fb3272afc9c94f08d101b8ba9dc56",url:"./overview/timeline/2021/index.html"},{revision:"b4a1dc0bd39f103fa44179a3cf9f8133",url:"./overview/timeline/2021/page/2/index.html"},{revision:"c8b07439e4d5398045d1e9f84557d07c",url:"./overview/timeline/index.html"},{revision:"3c06e23c82a45919b464904bff9053bc",url:"./overview/timeline/page/2/index.html"},{revision:"cc91266e210416d5048028fb5b3c0516",url:"./page/2/index.html"},{revision:"f066a0638dda14042a93bd2d20cdb082",url:"./posts/2021/1/index.html"},{revision:"44abc71d86ecf7af39c14cc177d8f82c",url:"./posts/2021/10/index.html"},{revision:"6839d75f835fcb4e4f19e96a0490c1f7",url:"./posts/2021/11/index.html"},{revision:"e6466f25eebf1f41ae12cd6bf97a6e6b",url:"./posts/2021/12/index.html"},{revision:"bccddb224f5bfbabdf7c655db8708702",url:"./posts/2021/2/index.html"},{revision:"33d5d31a787b051f5c82b9627cafb232",url:"./posts/2021/3/index.html"},{revision:"f997309c67fce6c9cf356612041bbc1b",url:"./posts/2021/4/index.html"},{revision:"d34dd903a522e913e6210b9eac636ad1",url:"./posts/2021/5/index.html"},{revision:"454e2e72ddcfe5f4e93f4a28b327712a",url:"./posts/2021/6/index.html"},{revision:"6d3b7994b62052737ed776b1450a3df7",url:"./posts/2021/7/index.html"},{revision:"1b8ca4b835ed612ced7b957f44582221",url:"./posts/2021/8/index.html"},{revision:"bd88d0949d534b3197459b3875fbbe7d",url:"./posts/2021/9/index.html"},{revision:"9e0c44d32aaf6496f066b61674879b8d",url:"./posts/2021/java1/index.html"},{revision:"9b1b3c0a5648ffb9feda8b3726f2fd8a",url:"./posts/2021/java2/index.html"},{revision:"bfef98c4db54155cf6e21479ebb0dfe9",url:"./posts/2021/java3/index.html"},{revision:"7d37254afffe3a3f260cb18ff3b67c1f",url:"./talk/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();