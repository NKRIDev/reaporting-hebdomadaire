<template>
    <h1>Login</h1>
    <form action="" method="POST" @click.prevent>
        <input type="text" placeholder="Pseudo">
        <input type="password" placeholder="Mot de passe">
        <button type="submit">Envoyer</button>
    </form>

    <div class="text-api">
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const message = ref("");

onMounted(async () =>{
    try{
      const data = await fetch("http://localhost:3333/api/hello");
      const messageData = await data.json();

      message.value = messageData;
      console.log(messageData);
    }
    catch (error){
      console.log(error);
    }
});
</script>

<style scoped>
</style>
