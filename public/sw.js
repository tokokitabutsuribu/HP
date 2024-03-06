
const checkAndCache = async (request) => {
    Cache.add(request.url);
};
const newCache = async (request) => {
    Cache.add(request.url);
};
const offline = async (request) => {
    const cache = await caches.open("dynamic-v1");
    if (/\.vercel\.app\/$|\.vercel\.app\/\?[^/]*/.test(request.url)) {
        return await cache.match('/offline.html');
    }
};
self.addEventListener('fetch', (e) => {
    if (!navigator.onLine) {
        if (e.request.method !== "GET") return;
        e.respondWith(
            (async () => {
                // キャッシュからレスポンスの取得を試みる
                const cache = await caches.open("dynamic-v1");
                const cachedResponse = await cache.match(e.request);

                if (cachedResponse) {
                    // キャッシュに一致するものが見つかった場合は返却
                    return cachedResponse;
                }

                // キャッシュに一致するものがなければ、ネットワークのものを使用
                return offline(e.request);
            })(),
        );
    } else {
        if (!/\.js|\.css|\.svg|\.webp|\.png|\.jpg|\.jpeg|\.ico|\.webmanifest|\.gif/i.test(e.request.url)) {
            //return cache and check
            e.respondWith(
                (async () => {
                    // キャッシュからレスポンスの取得を試みる
                    const cache = await caches.open("dynamic-v1");
                    const cachedResponse = await cache.match(e.request);

                    if (cachedResponse) {
                        // キャッシュに一致するものが見つかった場合は返却し、
                        // バックグラウンドでキャッシュ内の項目を更新
                        e.waitUntil(checkAndCache(e.request));
                        return cachedResponse;
                    }

                    // キャッシュに一致するものがなければ、ネットワークのものを使用
                    e.waitUntil(newCache(e.request));
                    return;
                })(),
            );

        } else {
            //no cache
            //e.waitUntil(checkAndCache(e.request));
            return;
        }

    }

});

self.addEventListener('install', () => {
    Cache.add('/offline.html');
});