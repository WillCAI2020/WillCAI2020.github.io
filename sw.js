const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"34aaed61d40da90ced259c54826ccc1f",url:"./008/index.html"},{revision:"a0bb4df3fb715c98496934ea42ce46a7",url:"./009/index.html"},{revision:"b8ca716623534797cd3d5ee5ed8abcb8",url:"./1/index.html"},{revision:"9d5d5cdf19e012536af5b2091b5a4041",url:"./2/index.html"},{revision:"a954ad9268fb17f0d08e9403cdcd40f4",url:"./3/index.html"},{revision:"c1a0e28da6dcd80bdefb28a705ba177c",url:"./4/index.html"},{revision:"57f33439b2e7b0f7ea35b250b4fb3975",url:"./5/index.html"},{revision:"4f7172e0b32f3fe17066ccb0f25dc91a",url:"./6/index.html"},{revision:"85ce36279c3eaf78cdc15116acfb7ecc",url:"./7/index.html"},{revision:"9fd2a178109328b402912da48a75e3af",url:"./8/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"51e9b7098aa116ee6eb4273b9aee7288",url:"./css/main.css"},{revision:"5701a98c6820f52ce144a5967b1e7ab8",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"60d065d1ff5d9222f3faf513bbe1355e",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"d65045ad0230ee9a0d14e6bcd93269a4",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"464eca3562b92c6dc5433c97a55decb9",url:"./lib/live2d-widget/demo/demo.html"},{revision:"6e0b838bc2191a0ca29d9377aaaac1d2",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"3a209fcc144c15c43307ad056418e915",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"35d6a897fc872ef2ce501275ff63f838",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"31dec06daf33ffef491bd438bc835c9d",url:"./overview/blog/index.html"},{revision:"2dbeaf03a248dc653b8749f3d9788ea7",url:"./overview/blog/page/2/index.html"},{revision:"094ca6499a103cbdaf028e736d909eb3",url:"./overview/code/index.html"},{revision:"6651915a028138f7dd8de7fa40433f42",url:"./overview/index.html"},{revision:"1b5400c35b788fafe87f8848702f19d6",url:"./overview/tags/bat/index.html"},{revision:"9b315ae5abcc6d109d425956814bfb05",url:"./overview/tags/git/index.html"},{revision:"c3d53284a3a875748e4d8b44f1911887",url:"./overview/tags/hexo/index.html"},{revision:"fb643f3cba6770e2f6cb956dff476710",url:"./overview/tags/hexo/page/2/index.html"},{revision:"a556577b92749b2945f9e0b8dca35293",url:"./overview/tags/index.html"},{revision:"3d6d921e074ef44c5da3826314c793f3",url:"./overview/tags/next/index.html"},{revision:"407202ccf7a82c078e929465dc4e24bf",url:"./overview/tags/record/index.html"},{revision:"d27b9e21c8bb37112ef265c2c69e9ac7",url:"./overview/tags/record/page/2/index.html"},{revision:"d7514eaecb86df79a2b8f0e8462dadcb",url:"./overview/timeline/2021/02/index.html"},{revision:"4926a267e20a07f53a3e48eea48d7d77",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"42ea28a9fd6f551cea327f29fd0a0895",url:"./overview/timeline/2021/index.html"},{revision:"d785fc2dc97f15be8ee93dc147c977ef",url:"./overview/timeline/2021/page/2/index.html"},{revision:"d6008f608f560c897d5c790003dc7355",url:"./overview/timeline/index.html"},{revision:"12885c36578f593f125d8ff8a37b703a",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();