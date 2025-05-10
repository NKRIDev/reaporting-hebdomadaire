<template>
  <div class="landing-page">
    <Background />

    <div class="menu-container">

      <router-link to="/visitor" class="text-decoration-none">
        <div class="card card-visitor">
          <div class="card-body text-center">
            <i class="fas fa-user-circle fa-5x mb-4"></i>
            <h5 class="card-title">Visiteur</h5>
            <p class="card-text">Accédez à la version visiteur</p>
            <button class="btn btn-visitor">Choisir Visiteur</button>
          </div>
        </div>
      </router-link>

      <router-link to="/login" class="text-decoration-none">
        <div class="card card-admin">
          <div class="card-body text-center">
            <i class="fas fa-shield-alt fa-5x mb-4"></i>
            <h5 class="card-title">Admin</h5>
            <p class="card-text">Accédez à la version administrateur</p>
            <button class="btn btn-admin">Choisir Admin</button>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script setup>
import Background from '@/components/Background.vue';
</script>

<style scoped>
.landing-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #4A6EE1, #2F448B);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.menu-container {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.card {
  width: 250px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.card-body {
  padding: 30px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333333;
}

.card-text {
  font-size: 1rem;
  color: #777777;
}

.btn {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-transform: uppercase;
}

.card-visitor {
  border-left: 5px solid #264ECA;
}

.card-admin {
  border-left: 5px solid #264ECA;
}

.btn-visitor {
  background-color: #264ECA;
  color: white;
}

.btn-visitor:hover {
  background-color: #FFC107;
}

.btn-admin {
  background-color: #264ECA;
  color: white;
}

.btn-admin:hover {
  background-color: #FFC107;
}
</style>
