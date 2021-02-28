const workboxVersion="6.1.1";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4778402a9145f7ea0623e781be0c0d9c",url:"./1/index.html"},{revision:"93fb344b5468289f55b85890034a576a",url:"./10/index.html"},{revision:"0b71c104071ac5885a2c6eea91a08101",url:"./11/index.html"},{revision:"83ab6a0105fb990e140c76a838206dcf",url:"./2/index.html"},{revision:"873d2e8e30eef99a30dbf9750615e918",url:"./3/index.html"},{revision:"88495da41c253a5317967cbd62a51c24",url:"./4/index.html"},{revision:"9d9c46a06849816253a59df0e4eafc43",url:"./5/index.html"},{revision:"086247ac0f1c725a276f5857a24b1ca8",url:"./6/index.html"},{revision:"bb8c36436bf6f64688def34c57bd74e3",url:"./7/index.html"},{revision:"8c961472de310f35360388e4fbb787e1",url:"./8/index.html"},{revision:"fd14a5a5341ad3d672152464a02b5fc2",url:"./9/index.html"},{revision:"869d27de335827bf430e6f74ff246c58",url:"./album/index.html"},{revision:"9a06670039f452fc9d4dd69e4dc03b0c",url:"./album/photo.html"},{revision:"10c41efff85b032abc0d0468449a86c1",url:"./album/picture.html"},{revision:"b308780f2ac2029f86d2c2ad2526b2d3",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"efe8dfa5da952907953dc6b9a4802a17",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"9e11605c2af1a29c1ed25211468cbdde",url:"./css/main.css"},{revision:"2ada6dd8faf4bbd44f436b52e06feb37",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"15b3a9d288acc5b021b4d3b24b5c3061",url:"./js/LinkCard.js"},{revision:"30f8db36b75b41f3bfe411632c50754e",url:"./js/links.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"338b7987287e052bb217470ee6c10ed4",url:"./js/mikutap.min.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"f7af9a63ed2c82f13cd15944a1b05ae2",url:"./js/sidecar.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"d5a9961b6e9f2e96454cccaf52f1f558",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"c33c2c261879cd4d163672d0a7cf3676",url:"./lib/live2d-widget/autoload.js"},{revision:"a01ae4c28808b4aece704f7c0f06252c",url:"./lib/live2d-widget/demo/demo.html"},{revision:"c7bac7eb4fb2cd906c42a96a8311d7a3",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"0f01d0ed72828f2e567b086ed2560353",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"76fd4aed133ee61d927fc6c3f6e5a099",url:"./lib/live2d-widget/waifu.css"},{revision:"dae8bda4726d9223476cc470876f189e",url:"./links/index.html"},{revision:"f16189becdbef91f7c471391bf413c94",url:"./links/linklist_dalao.json"},{revision:"9f6866ba44f990899ef9d6390ea4b8c6",url:"./links/linklist.json"},{revision:"54c77d020f45f53aae922e2e6a80ca69",url:"./manifest.json"},{revision:"cc64cacd301d5cd0cb735341d733c7b6",url:"./overview/blog/index.html"},{revision:"56cb16b8e7e41bb34c5d0afb08ab6d8b",url:"./overview/blog/page/2/index.html"},{revision:"0f3be8642f318f51c1b350025e4e72af",url:"./overview/code/index.html"},{revision:"932de6b241dff00135ad8105c0beb60a",url:"./overview/index.html"},{revision:"86dc682cb778617350b9c0d4eeccc718",url:"./overview/tags/bat/index.html"},{revision:"91b949709ea4ce310d615e09b716b45e",url:"./overview/tags/git/index.html"},{revision:"e9a13ea5481c46829350e0218a07e9e3",url:"./overview/tags/hexo/index.html"},{revision:"133f01e514892cba19841a696bc8bf79",url:"./overview/tags/hexo/page/2/index.html"},{revision:"3a9c91e649ac830f81534bb17528de05",url:"./overview/tags/index.html"},{revision:"20e8d4f5f8adc0b6f06fd93541ac0cd9",url:"./overview/tags/next/index.html"},{revision:"9eff732134725a18a513a4119b36aa0d",url:"./overview/tags/record/index.html"},{revision:"c9b437050d4bb19e62441d67efebfcfb",url:"./overview/tags/record/page/2/index.html"},{revision:"e01d6f23a06c9befeee2aa409a0c91e0",url:"./overview/timeline/2021/02/index.html"},{revision:"145dd78d80c4471b991c28e5542b0845",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"4914aa5cfd8d09da83b565597b8451fc",url:"./overview/timeline/2021/02/page/3/index.html"},{revision:"9f70cd619e7e56206734374554b13fbe",url:"./overview/timeline/2021/index.html"},{revision:"ca763416490e59ab5bd67fb2a55dcaee",url:"./overview/timeline/2021/page/2/index.html"},{revision:"429133bde64c00f0374ed55026882adb",url:"./overview/timeline/2021/page/3/index.html"},{revision:"86d6b3bd9bf3f9f3f2bd69d6d3456768",url:"./overview/timeline/index.html"},{revision:"90cea54f0d545b611e1bbf286045c49e",url:"./overview/timeline/page/2/index.html"},{revision:"5a70120c66934f818aa3658ac00d2681",url:"./overview/timeline/page/3/index.html"},{revision:"6c020198481a9ef3c1c265bdfa551176",url:"./page/2/index.html"},{revision:"325d010a35ae39dbb3dbd2a27c7e135a",url:"./talk/index.html"},{revision:"70c7b5b88595ca2d74369975f4ef1981",url:"./tool/about.html"},{revision:"4e229a055e039b95b0257eecea5f9b8b",url:"./tool/dd.html"},{revision:"4f0e26c07eac790507a6b03d0c6bab0f",url:"./tool/index.html"},{revision:"8158dc1448b3e368e12716560f6bf3b9",url:"./tool/main.json"},{revision:"b9d62f06b4687b3ea6af823003a45974",url:"./tool/mf.html"},{revision:"a83846d456ecbe16882a0b2ef121bda1",url:"./tool/tank.html"},{revision:"5d0429503aeea2eef666af9e7c360988",url:"./tool/track.json"},{revision:"4ef552b007fc3a63ea922bfc5c8e273f",url:"./tool/yszq.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();