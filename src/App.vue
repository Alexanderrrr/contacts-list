<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ContactList />
   <EventsExample
   v-bind:title="parentTitle"
   @callParentFunction="parentFunction"
   />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContactList from './components/ContactList.vue';
import EventsExample from './components/EventsExample.vue';

export default {
  name: 'app',
  data(){
    return {
      parentTitle: "Blog Title"
    };
  },

  components: {
    HelloWorld,
    ContactList,
    EventsExample,
  },

  methods: {
    parentFunction(name){
      console.log("Hi from parent, " + name);
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
