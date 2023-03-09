<template>
  <NavigatorT></NavigatorT>
  
  <div class="container p-5">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigatorT from '@/components/Navigator.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavigatorT
  }
});
</script>

<style>
#app {
}
</style>
