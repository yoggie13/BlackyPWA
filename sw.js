self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('cache-v1').then(function(cache) {
        return cache.addAll(
          [
            'css/index.css',
            'css/style.css',
            'js/script.js',
            'js/countdownScript.js',
            'index.html'
          ]
        );
      })
    );
  });

  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((r) => {
            
        return r || fetch(e.request).then((response) => {
                  return caches.open('cache-v1').then((cache) => {
            
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });

self.addEventListener('push', function (event) {
    console.log('Received push');
    var notificationTitle = 'Hello';
    var notificationOptions = {
        body: 'Push notifikacija poslata',
        icon: 'icon',
        badge: 'badge',
        tag: 'simple-push-demo-notification',
        data: {
            url: 'http://localhost/Blacky/order.html'
        }
    };

    if (event.data) {
        var dataText = event.data.text();
        //const obj = dataText? JSON.parse(dataText): "";
        notificationTitle = 'Kupite kafu';
        //notificationOptions.body = `Push data: ${obj.data || 'no-data'}`;
    }

    event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});


self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    if (event.notification.data && event.notification.data.url) {
        clients.openWindow(event.notification.data.url);
    }
});