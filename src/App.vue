<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import VSelect from '@/components/form/VSelect.vue';
import { ref } from 'vue';

const item = ref([]);
const list = ref([
  { id: '001', name: 'りんご' },
  { id: '002', name: 'みかん' },
]);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <VSelect
    v-model="item"
    :items="list"
    label-key="name"
    value-key="id"
    multiple
  />
  <p>{{ item }}</p>
</template>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
