<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue'
import FloatingImages from '@/components/FloatingImages.vue'

</script>

<template>
  <Navbar />
  <FloatingImages />
  <RouterView />
</template>

<style scoped></style>
