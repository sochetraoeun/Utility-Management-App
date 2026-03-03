<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
nav a.router-link-active {
  color: #535bf2;
}
</style>
