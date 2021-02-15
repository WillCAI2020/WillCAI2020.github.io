const workboxVersion="6.1.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"ruchan"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b80552389026e54065c5c8dc6f43f669",url:"./008/index.html"},{revision:"5d5ad4407f299e0e6bc8732bf1e382f4",url:"./009/index.html"},{revision:"56df8ce477a2b55035f7c4431bbc0cc2",url:"./1/index.html"},{revision:"1ffda7ab368e300145baf6b8f0e8b88f",url:"./2/index.html"},{revision:"d55f19c57ef74b4e71b1d26d133fcf59",url:"./3/index.html"},{revision:"d18c93a56a91093071e26d9eb48b7aa8",url:"./4/index.html"},{revision:"0e2925a5e9af7776e5bbfdb2b536f225",url:"./5/index.html"},{revision:"78fa77dd0f89f5f721caddba1fc36f38",url:"./6/index.html"},{revision:"82cfe2dbe8b15dfb1b4b4d3f3452cadd",url:"./7/index.html"},{revision:"98fb8da9de5616b0ac5ef411b3211cf7",url:"./css/hbe.style.css"},{revision:"a4948aaf1f70fbbc3e4d5bfa472a05ce",url:"./css/main.css"},{revision:"3d49765749e1d0472e3117ec86b89719",url:"./index.html"},{revision:"b1e237aef80ed7a74f443be0d5dbb6e0",url:"./js/activate-power-mode.min.js"},{revision:"b464297f7166a35d012731933675c4f8",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"5a87dd19400b2870ef6734f56cfe2208",url:"./js/cursor/love.min.js"},{revision:"f30f5e99916295da80561c0449f7fb10",url:"./js/cursor/text.js"},{revision:"d2f07f46aad69dea304787b7444b49a7",url:"./js/darkmode.js"},{revision:"32fa24fa491f40a9e1eac06bc470a162",url:"./js/fold_action.js"},{revision:"220afd743d9e9643852e31a135a9f3ae",url:"./js/jquery-3.4.1.min.js"},{revision:"ed76f0477612ce7b93c266cfa71b711b",url:"./js/jquery.gifplayer.js"},{revision:"21b8d121643fc8dbc96b408386369337",url:"./js/jquery.lazyload.js"},{revision:"b62b9e350a98e4ec5120218fb10fdbcd",url:"./js/local-search.js"},{revision:"7abc3ca6d1524ff02cc435bf8ad4ea05",url:"./js/motion.js"},{revision:"0a24088e0bbb7c00f11f880d261d8819",url:"./js/next-boot.js"},{revision:"afeaf0f52540ad38de5d14e7aa7e0e11",url:"./js/tags.js"},{revision:"f9807bab9931ed20221a335475f37811",url:"./js/theme_change.js"},{revision:"a670d505a98b5e3e3d16311e7afb772c",url:"./js/utils.js"},{revision:"04303982b37bbc57500b3d843b7d7abf",url:"./lib/canvas_ribbon/canvas-ribbon.js"},{revision:"d724daf87da08e1a8b43ddbb28a9ff6c",url:"./lib/canvas_ribbon/README.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"767726c570dad7d1469fa5dba259937e",url:"./lib/live2d-widget/autoload.js"},{revision:"46a0147f70694aec8dfa4dd1e9b3ce9c",url:"./lib/live2d-widget/demo/demo.html"},{revision:"18c1bb8da6d1dea420b2d39cc5839dda",url:"./lib/live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./lib/live2d-widget/live2d.min.js"},{revision:"d7be03e1293ef090a6e827cb479583a5",url:"./lib/live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./lib/live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./lib/live2d-widget/waifu-tips.json"},{revision:"8757fd57d297485a313fd2d08bd87cb8",url:"./lib/live2d-widget/waifu.css"},{revision:"27392b208a1b4a414afeeb5102f1abb2",url:"./manifest.json"},{revision:"91691a4b2acef73690c18e113b7fc5e9",url:"./overview/blog/index.html"},{revision:"12ad4771cf3493710a583158039fb9d3",url:"./overview/blog/page/2/index.html"},{revision:"ad4921f1db0e8f4dfd93063239631263",url:"./overview/code/index.html"},{revision:"3e030611766dd139da848f1f36db8eb9",url:"./overview/index.html"},{revision:"f46dfafabed97543d52f10ef36361463",url:"./overview/tags/bat/index.html"},{revision:"59d5718fbfcfe3d8ba8916fc6e705740",url:"./overview/tags/git/index.html"},{revision:"d391a7f7f9db98a5f4e60565987476ae",url:"./overview/tags/hexo/index.html"},{revision:"0e1cc081aa3ba0a131fe30c97261f6df",url:"./overview/tags/hexo/page/2/index.html"},{revision:"4b9022c5b2cd4e3c3f699299fb275d8d",url:"./overview/tags/index.html"},{revision:"238deee0a36c732c7845d6c7c97cb287",url:"./overview/tags/next/index.html"},{revision:"14c6a668d9773265f158af8b98401f19",url:"./overview/tags/record/index.html"},{revision:"a0e070d79b06e89f4e1f96ad31733259",url:"./overview/tags/record/page/2/index.html"},{revision:"cb45256c33c96f23c84ce295b0aaf9b7",url:"./overview/timeline/2021/02/index.html"},{revision:"394e80b45a8b06c82f27b07ae0f2e77b",url:"./overview/timeline/2021/02/page/2/index.html"},{revision:"17448ef7b8d2c5342e764b3a2c585832",url:"./overview/timeline/2021/index.html"},{revision:"8de4f5df48fd4a8c96c47232ac2c6e95",url:"./overview/timeline/2021/page/2/index.html"},{revision:"6daf865bde6735f2eb7bb2123e32e12a",url:"./overview/timeline/index.html"},{revision:"a5b48b7469475e31463ad6b3658a513f",url:"./overview/timeline/page/2/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();