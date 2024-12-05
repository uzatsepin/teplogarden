<template>
    <div class="BenefitsItem">
        <div class="BenefitsItem__top">
            <div class="BenefitsItem__top-icon">
                <Icon :name="benefit.icon" />
            </div>
            <h3 class="BenefitsItem__top-title">{{ benefit.name }}</h3>
        </div>
        <p class="BenefitsItem__text">
            {{ benefit.text }}
        </p>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        benefit: {
            type: Object,
            required: true,
        },
    });
</script>

<style scoped lang="scss">
    .BenefitsItem {
        border-radius: 16px;
        background: $red;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        &__top {
            display: flex;
            gap: 16px;
            align-items: center;

            &-icon {
                & span {
                    width: 40px;
                    height: 40px;
                    color: #fff;
                }
            }

            &-title {
                font-weight: 700;
                font-size: 18px;
                line-height: 140%;
                color: #fff;
            }
        }

        &__text {
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #e2e2e2;
        }
    }
</style>
