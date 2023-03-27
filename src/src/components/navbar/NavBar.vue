<script setup>
defineProps({
    logo: String,
    brandName: String,
    logoLink: String
})
</script>

<template>
    <nav class="navbar navbar-brutalism navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" :href="logoLink">
            <img :src="logo" alt="Logo" width="270" height="80" class="d-inline-block align-text-top">
            {{ this.brandName }}
            </a>
        </div>
    </nav>
</template>

<style scoped>
.navbar-brutalism {
    height: 160px;
    border-bottom: 3px solid black;
    border-width: 3px;
}
</style>