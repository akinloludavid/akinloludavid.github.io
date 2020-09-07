const cacheArr = ['/', './css/*'];
self.addEventListener('install', (event)=>{
    console.log('worker is installed');
    event.waitUntil(
        caches.open('cache-v1').then((cache) =>{
            console.log("Opened cache");
            cache.addAll(cacheArr).then(() => self.skipWaiting());
        })
    )
})