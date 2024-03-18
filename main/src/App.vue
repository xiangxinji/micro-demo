<script setup lang="ts">
</script>

<template>
<!-- 
  <a href="/_app/list">List</a>
  
  <a href="/_app/detail">Detail</a> -->

  {{ $route.fullPath }}

  <RouterLink to="/_app/list">List</RouterLink>
  <RouterLink to="/_app/detail">Detail</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
