(function () {
    const urlBase64ToUint8Array = (base64String) => {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
  
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
  
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
  
  
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("sw.js", { scope: "." })
        .then((register) => {
          console.log("Uspesno registrovan");
          if ("Notification" in window) {
            Notification.requestPermission((result) => {
              if (result === "granted") {
                register.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array('BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo')
                }).then(subscription => {
                  fetch("http://localhost:5000", {
                    method: "POST",
                    body: JSON.stringify(subscription),
                    headers: {
                      "content-type": "application/json"
                    }
                  });
                });
  
              
              } else if (result === "denied") {
              } else {
              }
            });
          }
        })
        .catch((err) => console.log("Nije registrovan", err));
    }
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    function updateStatus(event){
      if(navigator.onLine){
        alert("Vratio si se online");
        return;
      }else{
        alert("Otisao si offline");
        return;
      }
    }
})();  