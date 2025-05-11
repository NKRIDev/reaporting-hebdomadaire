<template>
  <h1>Login</h1>
  <form @submit.prevent="handleLogin">
    <input v-model="password" type="password" placeholder="Mot de passe" />
    <button type="submit">Envoyer</button>
    <p v-if="error" style="color:red">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import {useRoute} from "vue-router";

const route = useRoute();

const password = ref("");
const error = ref("");

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ password: password.value }),
    });

    const data = await response.json();

    if(!response.ok) {
      error.value = data.message;
      console.log("ee");
    }
    else {
      error.value = "";
      alert(data.message);
      console.log("200");
    }
  }
  catch (error) {
    error.value = "Erreur réseau";
    console.log(error);
  }
}
</script>

<style scoped>
</style>
