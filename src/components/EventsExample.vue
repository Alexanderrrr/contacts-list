<template lang="html">
<div>
  <h3>{{ title }}</h3>
  <button @click="functionInChild">Call parent function</button>
  <h2>{{ message }}</h2><br>
  {{ getReversedMessageMethod() }}
  <br>
  {{ reverseMessageComputed }} <!-- computed se poziva bez zagrada -->
</div>
</template>

<script>
export default {
  data(){
    return {
      message: "Ovo je neka poruka"
    }
  },

  props: ['title'],
  methods: {
    functionInChild(){
      console.log('child function');
      this.$emit('callParentFunction', 'Jack');
    },

    getReversedMessageMethod(){
      return this.message.split(' ').reverse().join(' ')
    }
  },

  computed: {
    reverseMessageComputed(){
      return this.message.split(' ').reverse().join(' ')
    }
  }
}
</script>

<style lang="css">
</style>
