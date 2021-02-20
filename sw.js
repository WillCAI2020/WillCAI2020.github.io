const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"893926362c140426f23cf19c4121dfb2",url:"./008/index.html"},{revision:"cf4d7c0de1de98742b79c42db01c0c0a",url:"./009/index.html"},{revision:"be5075fa08ccc857fcb0a8fe7ab018a7",url:"./1/index.html"},{revision:"0f5f9571b08ecae30a93acac60fe2609",url:"./2/index.html"},{revision:"59defba3ea0f9197249afda44ded870a",url:"./3/index.html"},{revision:"1094589e61dddc91b1f06d23d0f0034a",url:"./4/index.html"},{revision:"84c247be3a54fec38c7e0c71cbfc59e2",url:"./5/index.html"},{revision:"c7af6863ee2b3d1d0aa521bf71f1ad89",url:"./6/index.html"},{revision:"01c49a8ce1d35dca084c9433429ae19c",url:"./7/index.html"},{revision:"b2e4be71e8cb11b1b5455a4332d2db56",url:"./8/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"d6e1354e722645ede0e549b6a2189fe0",url:"./css/main.css"},{revision:"484e7d91f8aad17e1435019dcbe80714",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"60d065d1ff5d9222f3faf513bbe1355e",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"e67f9a085ffb680699962b898f0fcb26",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"14e3f36584e0585af14e04aee8b7e01f",url:"./lib/live2d-widget/demo/demo.html"},{revision:"861c6dd3cb4eea89a32ea588080a0063",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"3e8530b929955d5d3b82d81ae0f1516b",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"b1ef9eb261970c85820c51715e4fc5d8",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"90fa8fc377079dfe83259fc12e7b68ad",url:"./overview/blog/index.html"},{revision:"a3aa7d370a21b30b143e3d649f7a06dd",url:"./overview/blog/page/2/index.html"},{revision:"c64b9a017152eaf2618191defe3a5791",url:"./overview/code/index.html"},{revision:"e22fb0b9a7fd42cab4d0b2a3e16f692c",url:"./overview/index.html"},{revision:"f500fe435073cb28e9c37c33526683a1",url:"./overview/tags/bat/index.html"},{revision:"ef54a11a0e4ad9e1fcc627838e08668a",url:"./overview/tags/git/index.html"},{revision:"37df9ce2d63d54d6199d07ef1a99df70",url:"./overview/tags/hexo/index.html"},{revision:"4b343c7072991d7ce79ce7b89d6de4fc",url:"./overview/tags/hexo/page/2/index.html"},{revision:"e722fdf98a5c15b01cd563b54bf9f23b",url:"./overview/tags/index.html"},{revision:"011b8fec37b3d34b0cc2c8ab58b161a8",url:"./overview/tags/next/index.html"},{revision:"14a4b7ccaded2c5a51d914024ffe2149",url:"./overview/tags/record/index.html"},{revision:"5056e24910ebfba9c6ded33b04b8bb4a",url:"./overview/tags/record/page/2/index.html"},{revision:"7fa6758ce577cdc2031ce16f8de9949d",url:"./overview/timeline/2021/02/index.html"},{revision:"93a930d7ae1cc676c8f56a0103664c9e",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"ee573f8fae7d29eec894e336b0b88313",url:"./overview/timeline/2021/index.html"},{revision:"d68e9142d9185b7cbe5930364dbd1b21",url:"./overview/timeline/2021/page/2/index.html"},{revision:"d0d9120821afb1d074cdb43c3d41d356",url:"./overview/timeline/index.html"},{revision:"d173250b01f98bfb760146d5bfd30f40",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();