<template>
    <div>
        <h2>test component</h2>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router=useRouter();
const route=useRoute();

console.log(route.query);

console.log(route.params);
</script>