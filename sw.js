const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d33a7767312f905664d53a6ba95cbcf3",url:"./2021/02/07/2/index.html"},{revision:"9bebfbf53f3305792767ddd28295082c",url:"./2021/02/09/3/index.html"},{revision:"b2b2f6bcee66ad0a42839ab78033307f",url:"./2021/02/09/4/index.html"},{revision:"abc1043846aac7b7ec97d778f419dac3",url:"./2021/02/09/5/index.html"},{revision:"7aa1ebfd572b545c84c0cd94d4b6200a",url:"./2021/02/09/6/index.html"},{revision:"ef8d69a86236b420ff25ac01237de51f",url:"./2021/02/10/008/index.html"},{revision:"792fdd224e4960ab11c63ecd83195ca3",url:"./2021/02/10/7/index.html"},{revision:"404bae0ab7d15914975299f5c739bb83",url:"./2021/02/11/009/index.html"},{revision:"4eeebeb1e3da124be139e1949f08af96",url:"./2021/02/13/1/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"fdb5adf479c88f46aaee4b4c2c8a11c9",url:"./css/main.css"},{revision:"7735f5b1730ed7395564a46b512008a1",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"6613f97af34f496970311a99512bb53c",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"16f472b7bbd8c13fd4465cdf50b1f418",url:"./lib/live2d-widget/demo/demo.html"},{revision:"7e548ab43c2112a8f5942cf05f5ffd44",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"391fd77a2b64194b821e47486198e34f",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"27392b208a1b4a414afeeb5102f1abb2",url:"./manifest.json"},{revision:"3dadc5a13584d1820dd230c975dbc7a4",url:"./overview/blog/index.html"},{revision:"80d4143222bafd017806cfe91f045ec6",url:"./overview/blog/page/2/index.html"},{revision:"23650add2ad4ab75ec0ce9dba7d962e5",url:"./overview/code/index.html"},{revision:"730935bd1dc98b0ae4954d6b335a8314",url:"./overview/index.html"},{revision:"a0be08d0e2d00e518e599d5b69ccaf24",url:"./overview/tags/bat/index.html"},{revision:"4a354676b21ec51941070bcce32f69bd",url:"./overview/tags/git/index.html"},{revision:"9392683b798b87f687ba8b7d388ade8e",url:"./overview/tags/hexo/index.html"},{revision:"95472eea822249fd422986289e39a24f",url:"./overview/tags/hexo/page/2/index.html"},{revision:"2a559b402f09f1b0778a44ea0158c6f3",url:"./overview/tags/index.html"},{revision:"a60d3f9e1bfd81db68283655b7bcb789",url:"./overview/tags/next/index.html"},{revision:"a722ddd8368cef41cfe74aa2832d3734",url:"./overview/tags/record/index.html"},{revision:"f8a8c8fa48de50e0e58664aca641c1f4",url:"./overview/tags/record/page/2/index.html"},{revision:"313d5e25ae23a438e2dbb3542dfe4c6d",url:"./overview/timeline/2021/02/index.html"},{revision:"9358b3594bf015edde6de9f4d837ca3b",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"3377bd7c703e39e9bb49987d48ce7fdf",url:"./overview/timeline/2021/index.html"},{revision:"d28220c64b04bd0e0d6d97175c2b603e",url:"./overview/timeline/2021/page/2/index.html"},{revision:"c3314c15e9076ecd7f8bbb9f73a845a8",url:"./overview/timeline/index.html"},{revision:"bc2b13f2f45bd1c4c1bc49b6fef5f0de",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();