const workboxVersion="6.1.1";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d0e28a2331db6536b1c7202f27e036c3",url:"./008/index.html"},{revision:"14c44870fa68629dde36f893a49a724b",url:"./009/index.html"},{revision:"073e6667b66696a8f77b5324d8036658",url:"./1/index.html"},{revision:"95ec2c7f8cc05731240064e2e7e4eb9b",url:"./2/index.html"},{revision:"3d3254d9821a9775d897e5d60f078c06",url:"./3/index.html"},{revision:"9bfd2b728c4090706372d61349503e10",url:"./4/index.html"},{revision:"4d79cce85ac9038a0fd85b5bd74408bf",url:"./5/index.html"},{revision:"bb3fbbacabed8e3b898ea51b29be96e9",url:"./6/index.html"},{revision:"27e559bd0cc9cfe65aef67bdb0a7ac06",url:"./7/index.html"},{revision:"a9470e27c81ee5493f96adc65796fc65",url:"./8/index.html"},{revision:"a5567505f2d363f3ccc5691bbcc007a8",url:"./album/index.html"},{revision:"9a06670039f452fc9d4dd69e4dc03b0c",url:"./album/photo.html"},{revision:"8aef7ae1e54ad5c9b64c3aca88a2f34a",url:"./album/picture.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"306b6d29d4a4c3daa62a94d59b3adeb6",url:"./css/main.css"},{revision:"80cc323e34fa0191816675df24cb315c",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"15b3a9d288acc5b021b4d3b24b5c3061",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"338b7987287e052bb217470ee6c10ed4",url:"./js/mikutap.min.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"a862d3f4fa05f5f1c44ff1db69b4bf28",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"edbaae347010ccb88c565cc4d85bfdf1",url:"./lib/live2d-widget/demo/demo.html"},{revision:"2ddc4bd51ba15c6370823e2d09efb344",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"1f71061f3cc3189eb0c50ab83ef51ab0",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"70f94fc55070e130ddde897d1580befe",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"20f96df449de87596c29ce091dab2451",url:"./overview/blog/index.html"},{revision:"ae2ff14770670d2aaff097bf3f4ab8c3",url:"./overview/blog/page/2/index.html"},{revision:"4efcb3e5180555f4a8b3b6ea79328fed",url:"./overview/code/index.html"},{revision:"d60ab68267733a49b2cd23b483657c9d",url:"./overview/index.html"},{revision:"52a00ed52a3594ea22dd32b6cadef841",url:"./overview/tags/bat/index.html"},{revision:"c7b2c48ef1adaf5db8cd6590f37e40d4",url:"./overview/tags/git/index.html"},{revision:"10bdc949a470c29d1414fb80d320e748",url:"./overview/tags/hexo/index.html"},{revision:"7db9ece97331f0ef3458b6d4751e7135",url:"./overview/tags/hexo/page/2/index.html"},{revision:"72d2bca2e90c9214b6ab71d1a16b7034",url:"./overview/tags/index.html"},{revision:"0ae1cdd8cca4b445bf40b58ed6bfa1ba",url:"./overview/tags/next/index.html"},{revision:"a354dec3e7fef8f9bdc0f9512c587790",url:"./overview/tags/record/index.html"},{revision:"44a9cac2b427c354167da7080e5481a8",url:"./overview/tags/record/page/2/index.html"},{revision:"40d3ced2064dbdcc37d5b44735f0dc2d",url:"./overview/timeline/2021/02/index.html"},{revision:"0a485f1574d3a9452dc9ee5a90d9fcfd",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"fd29d9a908abd27249cd27ff1d739274",url:"./overview/timeline/2021/index.html"},{revision:"024bf5dab229e980ca202ecb94c946b8",url:"./overview/timeline/2021/page/2/index.html"},{revision:"05ae69b29d4e07bcb99fc47ac51a5df1",url:"./overview/timeline/index.html"},{revision:"5f11d89618208f001109b2020239baea",url:"./overview/timeline/page/2/index.html"},{revision:"7290def0f2f71e16c7c09479819eeb54",url:"./talk/index.html"},{revision:"70c7b5b88595ca2d74369975f4ef1981",url:"./tool/about.html"},{revision:"4e229a055e039b95b0257eecea5f9b8b",url:"./tool/dd.html"},{revision:"4f0e26c07eac790507a6b03d0c6bab0f",url:"./tool/index.html"},{revision:"8158dc1448b3e368e12716560f6bf3b9",url:"./tool/main.json"},{revision:"b9d62f06b4687b3ea6af823003a45974",url:"./tool/mf.html"},{revision:"a83846d456ecbe16882a0b2ef121bda1",url:"./tool/tank.html"},{revision:"5d0429503aeea2eef666af9e7c360988",url:"./tool/track.json"},{revision:"4ef552b007fc3a63ea922bfc5c8e273f",url:"./tool/yszq.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();