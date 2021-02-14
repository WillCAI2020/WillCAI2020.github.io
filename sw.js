const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"57c3eb0b125aa76b42fe498ebea3cb7b",url:"./008/index.html"},{revision:"a5ee5ac5b21d73b68150c09ea404e5ad",url:"./009/index.html"},{revision:"d7021ba14be28275544f51557faacd97",url:"./1/index.html"},{revision:"61181e44e7e9e8714cbb6a2c7edc2d2c",url:"./2/index.html"},{revision:"14cfbeef967ec0fff926b0e096e1bda3",url:"./3/index.html"},{revision:"edae6491ca417df72fc19cf1cb291de5",url:"./4/index.html"},{revision:"2ae043cd8abb31991d993853ef6ebc5d",url:"./5/index.html"},{revision:"95fb412333e75da3a531e9c95a1a38fb",url:"./6/index.html"},{revision:"d9ee99f4ffc084495892b8c0c200993b",url:"./7/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"3b87cc24b7418e7b7ef96be95ceb2de0",url:"./css/main.css"},{revision:"494ce2be7bb3a1c29d157a58eb270923",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"1b8275b6c1edecf59179a9e92166e392",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"b10bddd0a3ab3d8207bcd2b2323f0765",url:"./lib/live2d-widget/demo/demo.html"},{revision:"32fb1bce79edf5d208c467ddc2af12f4",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"b2a36d98b2f259f66c1301d4117d2ec9",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"27392b208a1b4a414afeeb5102f1abb2",url:"./manifest.json"},{revision:"397c0b94ea303c6f879f453562aa52ba",url:"./overview/blog/index.html"},{revision:"4bfd4fae9d59566bceb64125a9fde08f",url:"./overview/blog/page/2/index.html"},{revision:"8063f19aa657f10b84075d1b3178ef74",url:"./overview/code/index.html"},{revision:"cb0e0da07c968a6f4edad41b0027a774",url:"./overview/index.html"},{revision:"a0b8d2a21434434985cda6da23604064",url:"./overview/tags/bat/index.html"},{revision:"3078500ac780f76d75c2e574358be74b",url:"./overview/tags/git/index.html"},{revision:"ffc02a53f1e49d42e152db89a89134b4",url:"./overview/tags/hexo/index.html"},{revision:"8c28dae4f8a02364f30a35a329700563",url:"./overview/tags/hexo/page/2/index.html"},{revision:"07bc23b52e2df312ad273e93c9f037b7",url:"./overview/tags/index.html"},{revision:"573312902e448427d04da38aad4889ec",url:"./overview/tags/next/index.html"},{revision:"62a719069ad1736121aba2478519dba5",url:"./overview/tags/record/index.html"},{revision:"5d7fe0d40ce8a8dabf66dfbecbd70d99",url:"./overview/tags/record/page/2/index.html"},{revision:"dda996b16f4c93f44f300855e97ed86c",url:"./overview/timeline/2021/02/index.html"},{revision:"59f77334538cad25669095157e2b357d",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"2ec82405b6086613a0b46a9902c92e27",url:"./overview/timeline/2021/index.html"},{revision:"c2997b6f96664eb93206c2593c948fd9",url:"./overview/timeline/2021/page/2/index.html"},{revision:"e5bd1837e9c9a5968283b37c26f153b8",url:"./overview/timeline/index.html"},{revision:"c4bce456ddbd34d989eb465f11350450",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();