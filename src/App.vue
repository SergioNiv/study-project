<template>
  <router-view/>
  <ContactButton/>
</template>

<script>
import ContactButton from './components/ContactButton.vue';

export default {
  name: 'App',
  components: {
    ContactButton
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'inter', sans-serif;
}
</style>
