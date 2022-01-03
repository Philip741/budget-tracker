
const request = indexedDB.open('budgetDb', 1);

request.onupgradeneeded = function () {

}

request.onerror = function() {
    console.error("Error", request.error);
  };

