import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ContactList from './components/ContactList.vue';
import AddContact from './components/AddContact.vue'
import ContactDetail from './components/ContactDetail.vue'

Vue.config.productionTip = false


Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/contacts'},
  {path: '/contacts', component: ContactList},
  {path: '/add-contact', component: AddContact},
  {path: '/contacts/:id', component: ContactList, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
