const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"95e5ad09e31684379aa936f1f4afb6bd",url:"./008/index.html"},{revision:"44ef33aad1c20f42686f0427eca3f666",url:"./009/index.html"},{revision:"588ad6c38c2f1d57117a6f1e7438515f",url:"./1/index.html"},{revision:"9f1c3b77ef095d4d0e564198e7639635",url:"./2/index.html"},{revision:"c0371fac51725d98ecfe1ff587b5629b",url:"./3/index.html"},{revision:"cc6ed0f3de174bf0f116cb4de9bf3370",url:"./4/index.html"},{revision:"b98bf73cda91e6e97ae8185756f9bfb3",url:"./5/index.html"},{revision:"77593cfa7ec52f539b0b95e1b70ec355",url:"./6/index.html"},{revision:"7cacee7a5f5cd3e14e83d8f1e033a7da",url:"./7/index.html"},{revision:"6ef0628f0f29cfde8719478c8c71c695",url:"./8/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"9fcffdb1a6db16d7b804cbc534bb99b5",url:"./css/main.css"},{revision:"df96894b83bc2868b028f85ec3e8d6d6",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"60d065d1ff5d9222f3faf513bbe1355e",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"d92bbe3b37075adb82bfbd1fb932c87b",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"2d3fec44bbf57c97e97d088674b81a3c",url:"./lib/live2d-widget/demo/demo.html"},{revision:"93bf71e7b6f868b12250f31f68f55f0b",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"0708972b53f2847f347385329827c8b1",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"237b66d4decd68e5c8197b2031bcfd86",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"67d731e45862deb0c99dba0e7d2006a0",url:"./overview/blog/index.html"},{revision:"9b38042ff58e7767199ed221da814f1c",url:"./overview/blog/page/2/index.html"},{revision:"76156331c1e646e051b0698acd233b78",url:"./overview/code/index.html"},{revision:"9e196020463d36bc86c82dcee7798af8",url:"./overview/index.html"},{revision:"9da9fd2bf05b450c2c8a09cd6e7987c3",url:"./overview/tags/bat/index.html"},{revision:"8fe13815102289d11923d8c9e7c53cdd",url:"./overview/tags/git/index.html"},{revision:"58cc8c41f27d7f04334e066401b91644",url:"./overview/tags/hexo/index.html"},{revision:"819db00e66cde657795f7c4726a3e96e",url:"./overview/tags/hexo/page/2/index.html"},{revision:"4a19288617d8e86261f9cef61a088e61",url:"./overview/tags/index.html"},{revision:"a08ca554c32a6b8fbc1997f16f0831a4",url:"./overview/tags/next/index.html"},{revision:"cd29ebbbb03c841cde8818eb761e737a",url:"./overview/tags/record/index.html"},{revision:"41c8c265cbc76cf9931478e6a33bde2e",url:"./overview/tags/record/page/2/index.html"},{revision:"5b7d487f59b06e8861b2222765951698",url:"./overview/timeline/2021/02/index.html"},{revision:"63112a65f12e241b2ca47706dba9302d",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"68405a29913bfbbe24418f93cfac0bf9",url:"./overview/timeline/2021/index.html"},{revision:"32c5237bbe9eacaf442358ccbedcb2e8",url:"./overview/timeline/2021/page/2/index.html"},{revision:"6f3fa3f2e8b637d753ff78e9a04929c6",url:"./overview/timeline/index.html"},{revision:"1c9d90aaa7367be7db666b679341ecbe",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();