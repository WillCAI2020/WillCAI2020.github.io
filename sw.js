const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d67e6b9d7b27a1230f72c11babb94e34",url:"./2021/02/07/2/index.html"},{revision:"4e32915b463707b707eb7c3b8e116aca",url:"./2021/02/09/3/index.html"},{revision:"93cca44ee8a8501816155e5f73be8a02",url:"./2021/02/09/4/index.html"},{revision:"e12d15ad88ff00413075ecaf47f143eb",url:"./2021/02/09/5/index.html"},{revision:"245c7f1b0dce7e7100ae6f6730730601",url:"./2021/02/09/6/index.html"},{revision:"1587240172643894c3ce473ac94f238f",url:"./2021/02/10/008/index.html"},{revision:"456c638790ad5f971a4144797033bbf8",url:"./2021/02/10/7/index.html"},{revision:"691d7fb047c01ca6e5cce4fe9f5976f0",url:"./2021/02/11/009/index.html"},{revision:"b01a60af36588bfb88ad9020b50bc7d2",url:"./2021/02/13/1/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"5e66fe755b6064700406a9fefb80b6ec",url:"./css/main.css"},{revision:"3b3588a6fa48004f7bff7c6ca985d517",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"e42a0f2a52b526d22b8fd40eddf7d975",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"f2dac3f206247185270ab3a08d919d41",url:"./lib/live2d-widget/demo/demo.html"},{revision:"efeceb60240f22b00492caf13a01fc9e",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"99d169d3557747b1f04939dde7b353f3",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"27392b208a1b4a414afeeb5102f1abb2",url:"./manifest.json"},{revision:"4719e96e31cb7775c6fd56c177481be2",url:"./overview/blog/index.html"},{revision:"146ceef7a11b503b63e94597e19183fa",url:"./overview/blog/page/2/index.html"},{revision:"b17df9c976056f6d4a5e8e557717a9de",url:"./overview/code/index.html"},{revision:"0ae148f6c375f54c1c85dfb705982dfc",url:"./overview/index.html"},{revision:"09ffba8892b2919451f9374f3f13deee",url:"./overview/tags/bat/index.html"},{revision:"eaed4e216fe1a0a61b8d0fa3397b6cef",url:"./overview/tags/git/index.html"},{revision:"e9245800cd2e535b4b1aaa54f04161e3",url:"./overview/tags/hexo/index.html"},{revision:"153d1d7b130099aa42b76b3823c1a988",url:"./overview/tags/hexo/page/2/index.html"},{revision:"03771e47b6fe01923d82c482bce8af19",url:"./overview/tags/index.html"},{revision:"212a854cbff19611a1b4906c4e92a4b3",url:"./overview/tags/next/index.html"},{revision:"c6856864924a8227ad21c2a44bf5f974",url:"./overview/tags/record/index.html"},{revision:"13b9e5349fe8656656f0ba8ff585ef5a",url:"./overview/tags/record/page/2/index.html"},{revision:"e7e90f566539ef24aaaae540c802d194",url:"./overview/timeline/2021/02/index.html"},{revision:"bd3236a72ddbb2c4f62c6dab35048a61",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"0b41ab2502ded1d2fe15242e4ee56c43",url:"./overview/timeline/2021/index.html"},{revision:"5ddfa784e0a9585ecf629a8caf1dce5a",url:"./overview/timeline/2021/page/2/index.html"},{revision:"a12264655d441fe08864b28fbfe9fb60",url:"./overview/timeline/index.html"},{revision:"fb154e79aa345473f1763853f99fb144",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();