const Cache_name="version-1";
const UrltoCache=['./','./src/master.css','./images/news1.jpg','./offline.html'];


self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(Cache_name).then((cache)=>{
            console.log("opened cache");
    
            return cache.addAll(UrltoCache);
        }
        )
    )
    })

    self.addEventListener('fetch',(event)=>{
        event.respondWith(
            caches.match(event.request).then(()=>{
                return fetch(event.request).
                catch(()=>caches.match('offline.html'));
            })
        )
        })