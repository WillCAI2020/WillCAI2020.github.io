const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"17b540753c6b9ad806bf3de7a1ab8b03",url:"./008/index.html"},{revision:"6ad5c54f313f996840ee2d01e21dbb5a",url:"./009/index.html"},{revision:"32d81b283dffadfe20a2fade395fcd4e",url:"./1/index.html"},{revision:"de52baa6fcf94d8a48d94e1449a9bb06",url:"./2/index.html"},{revision:"2151788c15ae81eca513d8712ed5ffbd",url:"./3/index.html"},{revision:"eba01ebd5c12b2476a4ea59836503242",url:"./4/index.html"},{revision:"43d075a6a74166fdba992d8466fc7cfc",url:"./5/index.html"},{revision:"e43cb81079542a6df423b0da9f5be29f",url:"./6/index.html"},{revision:"4c14a2c7688e23c1b3bd8dac13e2f11e",url:"./7/index.html"},{revision:"d6dba53108b4c266b7f552afafd2864b",url:"./8/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"a71e78eb4f333ddb8d8a2be8c8ea97ba",url:"./css/main.css"},{revision:"34ca407359542db70d13b23aff82c682",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"60d065d1ff5d9222f3faf513bbe1355e",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"327cd88b102c9afcc285f8f6268f8b3e",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"bce95638ee0cde95303ff4598bfe58eb",url:"./lib/live2d-widget/demo/demo.html"},{revision:"0cfd4822c9dc1a7cd50071126f292a5a",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"1f2278c4c8c1728f6acd420c241cbcb7",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"18d64a42df883b28a3cb845cd76a6d7e",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"d36d0b438364f8bc6e8f9d6befa76b67",url:"./overview/blog/index.html"},{revision:"6c1ba7d4dfd8ac241f56b91a0d91ccf3",url:"./overview/blog/page/2/index.html"},{revision:"60a8b4bd919a73e2f1ff692c304c4ae6",url:"./overview/code/index.html"},{revision:"d4614d4e20ac2cfb798c74d545604a07",url:"./overview/index.html"},{revision:"c6d756f015522af9eb17a1372d5e066a",url:"./overview/tags/bat/index.html"},{revision:"1943409ef186779a4845eda1ec84d99a",url:"./overview/tags/git/index.html"},{revision:"c2fe393d9e7361c2e6591513d5c0ac5d",url:"./overview/tags/hexo/index.html"},{revision:"fd529f095aeecde18a72f58022089879",url:"./overview/tags/hexo/page/2/index.html"},{revision:"034c9829491a136e7ddf0a9dbfe84771",url:"./overview/tags/index.html"},{revision:"21e507e7f3f70a9f895ef8db8685e825",url:"./overview/tags/next/index.html"},{revision:"357e521192a6b5b8efb354d7131632cd",url:"./overview/tags/record/index.html"},{revision:"2eb537563df254a3a3352b5f668bb796",url:"./overview/tags/record/page/2/index.html"},{revision:"5f1f4d0d742f87874f2bc58f327514e8",url:"./overview/timeline/2021/02/index.html"},{revision:"4929c56c17a7432880915f5cddde9664",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"1dc925c97000d2af3a659e16dfe2ef3c",url:"./overview/timeline/2021/index.html"},{revision:"04a9e020a6bb17638e9c3ba63effeb85",url:"./overview/timeline/2021/page/2/index.html"},{revision:"5a635ed9ec3befe6fa1ecdb657c00d6b",url:"./overview/timeline/index.html"},{revision:"cb78be0fd43181e57c2cf36b959da225",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();