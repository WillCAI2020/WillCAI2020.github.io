const workboxVersion="6.1.1";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"5b61436ee23aa83e099924ba540d0bb6",url:"./008/index.html"},{revision:"adbf851ca43f4ac304e005492f77cc97",url:"./009/index.html"},{revision:"1011eefbf5ee4b53fb42614883ab7c03",url:"./1/index.html"},{revision:"a7dc584c8b445acebfeac59261bb6472",url:"./2/index.html"},{revision:"c1c03a07af2fce1033ae4978915b3d76",url:"./3/index.html"},{revision:"fd86df1a66a58091092c7842ecbbb9f5",url:"./4/index.html"},{revision:"072d397bf1f304104310747ced6e525c",url:"./5/index.html"},{revision:"b942ba3890b29b06cff0567dc30ae68c",url:"./6/index.html"},{revision:"9df85288226b5a4c5ad3f0bf860aa2c6",url:"./7/index.html"},{revision:"765a7368190d969a46b9cb81db0d7c27",url:"./8/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"0d1766bfc7fd53ddb33be3854a04a1b3",url:"./css/main.css"},{revision:"8968c8094acccb9d9b4e88aa40a625ea",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"15b3a9d288acc5b021b4d3b24b5c3061",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"9abff91a8fb1c3ba2d057fb0dd97cf27",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"38e6b5e9157e29ab2b7506323fea90a2",url:"./lib/live2d-widget/demo/demo.html"},{revision:"fac3cc3a3493d5dca61b9926fb3e355e",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"53e8c342a5272256a3d0a63ecb09e08a",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"c25885e606e6b99e1252fb94d7772b52",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"cb24ea2a8432b4c70ee70a6861076dd3",url:"./overview/blog/index.html"},{revision:"4fe71c070bde4c40f1da884aa31f3dd9",url:"./overview/blog/page/2/index.html"},{revision:"c7cf07543dac616eae5d9e74910c7e0f",url:"./overview/code/index.html"},{revision:"76030804cb1167c11411b6203d294f26",url:"./overview/index.html"},{revision:"ec5e62f8dff19fc85439581a691b58ed",url:"./overview/tags/bat/index.html"},{revision:"fc656c665eb9dac8691af181933bc5eb",url:"./overview/tags/git/index.html"},{revision:"041f0bef3eb4a8dc931e4bd137423877",url:"./overview/tags/hexo/index.html"},{revision:"1aa1eb876ab3a9dd79ae63f06451940c",url:"./overview/tags/hexo/page/2/index.html"},{revision:"7c3c3bcec670e6f40cb39c632e0a324b",url:"./overview/tags/index.html"},{revision:"753751fb1911d9585129e8acc4d56ead",url:"./overview/tags/next/index.html"},{revision:"4f2ea85f432d2f17aa643b52b27568a8",url:"./overview/tags/record/index.html"},{revision:"edb17612b0d99a936c17855ffeced4b6",url:"./overview/tags/record/page/2/index.html"},{revision:"82bebdd7023bdf1e788152630ef0f5c8",url:"./overview/timeline/2021/02/index.html"},{revision:"7c663f8c08feafb6c2a653de0a96dee2",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"08dea75af177f35fa1192ee4a89384eb",url:"./overview/timeline/2021/index.html"},{revision:"34181c2eb80275306bd7bfe57332a404",url:"./overview/timeline/2021/page/2/index.html"},{revision:"2d226ec02db8ba6604b029cc2b57bcef",url:"./overview/timeline/index.html"},{revision:"55c0a1a4a32c6f87d1dcb57e2b8b34f3",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();