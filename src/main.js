import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './registerServiceWorker'
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onOfflineReady() {
    // Get the dialog element
    const dialog = document.getElementById('offlineDialog');

    // Show the dialog
    dialog.style.display = 'block';

    // Attach event listener to the OK button
    const okButton = document.getElementById('okButton');
    okButton.addEventListener('click', () => {
      // Hide the dialog when OK button is clicked
      dialog.style.display = 'none';
    });
  },
  immediate: true
});


const app = createApp(App)

app.use(router)

app.mount('#app')
