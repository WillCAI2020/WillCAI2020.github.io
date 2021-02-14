const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c485ecc36142cfe6bcf784180264f6e3",url:"./008/index.html"},{revision:"890274d9cf186992b2751f50ceb67b24",url:"./009/index.html"},{revision:"2f7d2e94e4dc27ba497225057e518564",url:"./1/index.html"},{revision:"36a992062f7f27400d87281f3c4f37d3",url:"./2/index.html"},{revision:"8775bde0e3b6f9e3ae76439e57da5b93",url:"./3/index.html"},{revision:"3279937b4ef5fd4ef049351f063a5daf",url:"./4/index.html"},{revision:"c8f028579e91548583e19ec741f840f2",url:"./5/index.html"},{revision:"e8e40204b0417128edd862c044186da3",url:"./6/index.html"},{revision:"5904b68d75f26b945ca2d47b106361ee",url:"./7/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"72e81934504ae8c42fb4612bc9830f1e",url:"./css/main.css"},{revision:"ecd2d80fd37891f665448c3c319793b5",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"2d03a637eede3b9ab445b5c3d0d1e1a7",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"c564ac34ec6d2f12ea1c7a46177f7e36",url:"./lib/live2d-widget/demo/demo.html"},{revision:"509da8ce84e18f3b42cb60f893431fc2",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"8e844593b40cb8910fa4373e5c19ab07",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"27392b208a1b4a414afeeb5102f1abb2",url:"./manifest.json"},{revision:"413c41ac7edb9a531579b7b2ee338a10",url:"./overview/blog/index.html"},{revision:"3c1dfa77190168e3f026edb6c6110a44",url:"./overview/blog/page/2/index.html"},{revision:"28d397e79028169dbb2eee9f599a7131",url:"./overview/code/index.html"},{revision:"155fbef9a746eb80f384b4268c78c30c",url:"./overview/index.html"},{revision:"87950fa6c8ed4af6a020908591f7850b",url:"./overview/tags/bat/index.html"},{revision:"e893ed2ba31f722ba2c3a3acfd899ccb",url:"./overview/tags/git/index.html"},{revision:"5eaca8e28c41cceb3b64bec3705ee683",url:"./overview/tags/hexo/index.html"},{revision:"0fd99936104aac9456ee80c4312ada75",url:"./overview/tags/hexo/page/2/index.html"},{revision:"95320a23aed84ef1b46f38ae46877296",url:"./overview/tags/index.html"},{revision:"fb57c9ce333d847b05ab134570cac868",url:"./overview/tags/next/index.html"},{revision:"2ee773e01a1a523b67e38987b40a1b90",url:"./overview/tags/record/index.html"},{revision:"c207f1b3cf04d5ef50c41fcc93ba51e9",url:"./overview/tags/record/page/2/index.html"},{revision:"a6fd1bce49ed0ab88322609f93da22f4",url:"./overview/timeline/2021/02/index.html"},{revision:"95e69b9683da90f4b17b31944a85673d",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"bba2000116ae29e8676522784e20dc93",url:"./overview/timeline/2021/index.html"},{revision:"e0b398286bf7c257df1a05a58ac168b1",url:"./overview/timeline/2021/page/2/index.html"},{revision:"b5c160496c1995fadd26ed040be59da3",url:"./overview/timeline/index.html"},{revision:"ad7db9986d2df5c53848d2ab9a195d14",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();