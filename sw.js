const cacheName = 'food2-v1';
// 列出所有需要離線使用的檔案
const assets = [
  '/food2/',
  '/food2/index.html',
  // 如果您有額外的 CSS 或 JS 檔案，請加在這裡，例如：
  // '/food2/style.css',
  // '/food2/script.js'
];

// 安裝時儲存檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// 沒網路時從快取抓資料
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
