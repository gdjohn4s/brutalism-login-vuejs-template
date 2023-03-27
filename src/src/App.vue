<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
/* route trantitions */
.route-enter-from {
  opacity: 0;
  filter: blur(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  filter: blur(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>