<template>
    <div class="ProductCardDescr">
        <div class="ProductCardDescr__block" v-html="description"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    description: string
}>()
</script>

<style lang="scss">
.ProductCardDescr {
    &__block {

        h2 {
            margin-top: 18px;
            font-weight: 600;
            font-size: 24px;
            line-height: 140%;
            color: #141414;
        }

        h3 {
            margin-top: 16px;
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            color: #141414;
        }

        p {
            margin-top: 8px;
            font-size: 16px;
            line-height: 140%;
        }
        
        ul {
            margin-top: 8px;
            padding-left: 20px;
            font-size: 16px;
            line-height: 140%;

            li {
                list-style-type: disc;
            }
        }

        ol {
            margin-top: 8px;
            padding-left: 20px;
            font-size: 16px;
            line-height: 140%;

            li {
                list-style-type: decimal;
            }
        }
    }
}
</style>