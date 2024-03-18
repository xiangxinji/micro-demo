<template>
    {{ $route.fullPath }}
    <micro-app
      class="micro-app-cmpt"
      :name="'app'"
      :url="'http://localhost:5174'"
      :baseroute="'_app'"
      :keep-alive="false"
    />
</template>

<script>
console.log('11');
</script>