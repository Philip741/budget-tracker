window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
        console.log("Registered service worker ", registration);
      // Registration was successful
    }, function (err) {
        console.log(err);
      // Registration failed
    });
  });