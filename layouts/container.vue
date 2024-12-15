<template>
    <div class="container">
        <slot />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.container {
    max-width: 1275px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (max-width: 1365px) {
        padding: 0 24px;
    }

    @media screen and (max-width: 767px) {
        padding: 0 16px;
    }
}
</style>