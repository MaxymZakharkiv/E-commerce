import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MInput from '@/components/ui-kit/MInput'
import MButton from '@/components/ui-kit/MButton'
import MCheckbox from '@/components/ui-kit/Checkbox/MCheckbox'
// import MCheckboxGroup from '@/components/ui-kit/Checkbox/MCheckboxGroup'

const app = createApp(App)

app.component('MInput', MInput)
app.component('MButton', MButton)
app.component('MCheckbox', MCheckbox)
// app.component('MCheckboxGroup', MCheckboxGroup)

app.use(store).use(router).mount('#app')
