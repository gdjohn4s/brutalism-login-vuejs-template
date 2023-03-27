<script setup>
defineProps({
    label: String,
    typeFormat: String,
    placeholder: String,
})
</script>

<template>
    <div class="input-wrapper mt-5">
        <label class="brutalism-label" :for="type">{{ this.label }}</label>
        <input 
        :type="typeFormat"
        class="brutalism-field" 
        :placeholder="placeholder"
        aria-describedby="addon-wrapping">
    </div>
</template>

<style scoped>
.brutalism-field {
    border-color: black;
    border-width: 3px;
    background-color: #D7D38D;
    color: white;
    width: 45vw;
    height: 6vh;
}

@media (max-width: 680px) {
    .brutalism-field {
        width: 100%;
        height: 6vh;
    }
}

@media (max-width: 320px) {
    .brutalism-field {
        width: 100%;
        height: 6vh;
    }
}

.brutalism-label {
    font-weight: 700;
    font-size: 24px;
    color: black;
}

.inputWrapper input, label{
  display:block;
  color: black;
}

</style>