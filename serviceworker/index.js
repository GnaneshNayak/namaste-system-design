if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((res) => console.log('registered successfully'))
    .catch((err) => console.log('sw didnt register', err));
}
