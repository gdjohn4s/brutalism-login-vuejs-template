<script setup>
defineProps({
    value: String,
    onClickFun: String,
    bgColor: String,
    borderColor: String,
    textColor: String
})

</script>

<template>
    <button
        class="mt-5 brutalism-button" 
        id="" 
        type="button"
        placeholder="Send"
        @click.prevent="onClickFun"
    >{{ this.value }}</button>
</template>

<style scoped>
.brutalism-button {
    border-color: v-bind('borderColor');
    border-width: 3px;
    background-color: #F8B03D;
    font-weight: 600;
    height: 8vh;
    width: 10.5vw;
    transition: all 0.5s;
    color: v-bind('textColor');
}

.brutalism-button:hover {
    background-color: #dd8c0b;
    transform: scale(1.02px);
}


@media (max-width: 680px) {
    .brutalism-button {
        width: 40%;
        height: 8vh;
    }
}

@media (max-width: 320px) {
    .brutalism-button {
        width: 40%;
        height: 8vh;
    }
}
</style>