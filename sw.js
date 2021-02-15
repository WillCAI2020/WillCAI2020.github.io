const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"95c68e3e486efad3fc68abb981c96a49",url:"./008/index.html"},{revision:"5c3243d8b0c70fe4f803f6f72f39cc14",url:"./009/index.html"},{revision:"361d01346bd267050a3f58bc69ef3fe9",url:"./1/index.html"},{revision:"59a62bc54cdf194456cffcd9b5d36d83",url:"./2/index.html"},{revision:"16cb949249ae7b7d9ba54d11adcfa26e",url:"./3/index.html"},{revision:"b14fb2ab4f6bc31129f9d19a1b31d4bd",url:"./4/index.html"},{revision:"65208788dd0c8edaa029bd3dc389f67a",url:"./5/index.html"},{revision:"6c914888aefc8222f33e7e7b74818982",url:"./6/index.html"},{revision:"c887961c50cbc8b542b05f78b1b154aa",url:"./7/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"1045343871468646ca3f02ecbf89291c",url:"./css/main.css"},{revision:"2b1000ca90577251139351a30428bc5e",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"3ad846b747c0f005af8cd9538e2957cd",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"9625281a00a7989422b1e4f08b6681e3",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"800ff115e6a5878a70a391115248f20e",url:"./lib/live2d-widget/demo/demo.html"},{revision:"3e2c4713fd5a663564176a5892642a80",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"a59caa8ea67273b4e24818b195caa48d",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"19fb44fb3f23f3c35bd2c96eb6918a1c",url:"./links/index.html"},{revision:"986bd89f5c6bbd1b834ef06b821041b0",url:"./links/linklist_dalao.json"},{revision:"1730ac430aa92c562b6a966992d02eba",url:"./links/linklist.json"},{revision:"27392b208a1b4a414afeeb5102f1abb2",url:"./manifest.json"},{revision:"2619347712657dba9c96c73b4aaab5f9",url:"./overview/blog/index.html"},{revision:"fc41c2e608ef888d3f009efb973b4cb7",url:"./overview/blog/page/2/index.html"},{revision:"9f76c4cbd9ec332ece49cf9718621938",url:"./overview/code/index.html"},{revision:"3c63687cc3565e06588d3dfb62f3d489",url:"./overview/index.html"},{revision:"f0fe9933c7ccdf387cc2b8bdc86d314b",url:"./overview/tags/bat/index.html"},{revision:"a8ebfecc0d08974248931baeda8bc626",url:"./overview/tags/git/index.html"},{revision:"f3308b2272575fa3372a2441aa098f15",url:"./overview/tags/hexo/index.html"},{revision:"5d187c933fef77ea058b988e9a3c8873",url:"./overview/tags/hexo/page/2/index.html"},{revision:"8873a832d5febd631ad64d934e1a121f",url:"./overview/tags/index.html"},{revision:"172c5a36d11395e93b567b6be6cfda8c",url:"./overview/tags/next/index.html"},{revision:"e22016717ddc14ecfe381fc591a67688",url:"./overview/tags/record/index.html"},{revision:"e0322a6ee44384b8df8c638fe8c739be",url:"./overview/tags/record/page/2/index.html"},{revision:"1f0f2405edd00dad20ff9cd831b2fbea",url:"./overview/timeline/2021/02/index.html"},{revision:"6dff9ab5117fab9c8c6ffbddb09efca1",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"7982806652ddeddbd37f2c82855667cd",url:"./overview/timeline/2021/index.html"},{revision:"0267cee6d4613fd1e01bc9b03b8bd6eb",url:"./overview/timeline/2021/page/2/index.html"},{revision:"974976b9e2f46569bfa562229107b639",url:"./overview/timeline/index.html"},{revision:"c64816554fbf1b7709c7780560cd378d",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();