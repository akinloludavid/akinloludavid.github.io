const cacheArr = ['/', './css/*'];
const CACHE_NAME = 'cache-v1'
self.addEventListener('install', (event)=>{
    console.log('worker is installed');
    event.waitUntil(
        caches.open('cache-v1').then((cache) =>{
            console.log("Opened cache");
            cache.addAll(cacheArr).then(() => self.skipWaiting());
        })
    );
});


self.addEventListener("activate", (event)=>{
    event.waitUntil(
        caches.keys().then((cacheNames) =>{
            return Promise.all(
                cacheNames.map((cacheName )=>{
                    if (CACHE_NAME !== cacheName){
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
            .then((response)=>{
                if(response){
                    return response;
                }
                return fetch(event.request).catch(()=>() => caches.match(event.request));
            })
    )
})