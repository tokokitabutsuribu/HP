
const checkAndCache = async (request) => {

};
const newCache = async (request) => {

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
                    // キャッシュに一致するものが見つかった場合は返却し、
                    // バックグラウンドでキャッシュ内の項目を更新
                    e.waitUntil(cache.add(e.request));
                    return cachedResponse;
                }

                // キャッシュに一致するものがなければ、ネットワークのものを使用
                return fetch(e.request);
            })(),
        );
    } else {
        if (!/\.js|\.css|\.svg|\.webp|\.png|\.jpg|\.jpeg|\.ico/i.test(e.request.url)) {
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
                    return fetch(e.request);
                })(),
            );

        } else {
            //return request and check
            e.waitUntil(checkAndCache(e.request));
            return fetch(e.request);
        }

    }

});