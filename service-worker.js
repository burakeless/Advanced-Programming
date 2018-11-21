const CACHE ='JS'
const FILES = ['tableWork.html']
function installCB(e) {
    e.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(FILES))
            .catch(console.log)
    )
}
self.addEventListener('install', installCB)

//------------------------------------------------------------

function save(req, resp) {
    return caches.open(CACHE)
        .then(cache => {
            cache.put(req, resp.clone());
            return resp;
        })
        .catch(console.log)
}
function fetchCB(e) { //fetch first
    let req = e.request
    e.respondWith(
        fetch(req).then(r2 => save(req, r2))
            .catch(() => { return caches.match(req).then(r1 => r1) })
    )
}
self.addEventListener('fetch', fetchCB)

//-------------------------------------------

self.addEventListener('install', async event => {
    const cache = await caches.open('static-sample');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const {request} = event;
    const url = new URL(request.url);
    if(url.origin === location.origin) {
        event.respondWith(cacheData(request));
    } else {
        event.respondWith(networkFirst(request));
    }

});