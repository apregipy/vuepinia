<template>
  <div id="app">
    <h1>Contoh Vue Router</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> <!-- Tempat di mana komponen yang sesuai dengan route akan ditampilkan -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
