export function swDev() {
   navigator.serviceWorker.register('/sw.js')
    .then((resp) => {
        console.log('Service Worker registered with scope:', resp.scope);
        //here scope is on which local host it is running 
        // Service Worker registered with scope: http://localhost:3000/
    })
    .catch((error) => {
        console.log('Service Worker registration failed:', error);
    }); 
}
    
       




