<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>
      Explore
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
        >UI Components</a
      >
    </p>
  </div>
  <div>
    <ion-button @click="getJSON">Get data from API endpoint</ion-button>
    <ion-title v-text="local" > </ion-title>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  name: String,
});
let local = ref("");

function getJSON() {
  fetch("http://localhost:4444/jsondata")
    .then((res) => res.json())
    .then((data) => {
      updateValue(data);
    });
}

function updateValue(data): void {
  local.value = `${data.username}; ${data.password}`;
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
