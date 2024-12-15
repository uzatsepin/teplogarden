<template>
    <div class="ProductCardPrice">
        <div class="ProductCardPrice__title">Цена</div>
        <div class="ProductCardPrice__block">
            <div class="ProductCardPrice__old">
                <div class="ProductCardPrice__old-value">
                    {{ formatPrice(Number(priceOld)) }} ₽
                </div>
                <div class="ProductCardPrice__old-discount">-{{ discountPercentage }}%</div>
            </div>
            <div class="ProductCardPrice__new">{{ formatPrice(Number(priceNew)) }} ₽</div>
        </div>
        <div class="ProductCardPrice__buy">
            <OthersBuyButton @click="openOrderPopup">Заказать</OthersBuyButton>
            <OthersCallButton>Остались вопросы?</OthersCallButton>
        </div>

        <ProductPricePopup
            :name="`Форма заказа`"
            :isOpen="isOrderPopupOpen"
            @close="closeOrderPopup"
        >
            <form
                @submit.prevent="handleSubmit"
                class="PopupBuy__form"
            >
                <div class="PopupBuy__form-group">
                    <input
                        type="text"
                        v-model="form.name"
                        placeholder="Ваше имя"
                        required
                    />
                </div>
                <div class="PopupBuy__form-group">
                    <input
                        type="tel"
                        v-model="form.phone"
                        placeholder="Ваш телефон"
                        required
                    />
                </div>
                <div class="PopupBuy__form-group">
                    <textarea
                        v-model="form.comment"
                        placeholder="Комментарий"
                        rows="4"
                    ></textarea>
                </div>
                <OthersSecondaryButton
                    type="submit"
                    class="PopupBuy__form-btn"
                    >Оформить заказ</OthersSecondaryButton
                >
            </form>
        </ProductPricePopup>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        priceNew: string;
        priceOld: string;
    }>();

    const form = reactive({
        name: '',
        phone: '',
        comment: '',
    });

    const discountPercentage = computed(() => {
        if (!props.priceOld || !props.priceNew) return 0;
        return Math.round(
            ((Number(props.priceOld) - Number(props.priceNew)) / Number(props.priceOld)) * 100,
        );
    });

    const isOrderPopupOpen = ref(false);

    const openOrderPopup = () => {
        isOrderPopupOpen.value = true;
        useScrollLock().lockScroll();
    };

    const closeOrderPopup = () => {
        isOrderPopupOpen.value = false;
        useScrollLock().unlockScroll();
    };

    const handleSubmit = () => {
        console.log(form);
    };
</script>

<style scoped lang="scss">
    .ProductCardPrice {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 24px;

        &__title {
            font-weight: 600;
            font-size: 18px;
            line-height: 140%;
            color: #141414;
        }

        &__old {
            display: flex;
            gap: 8px;
            align-items: center;

            &-value {
                font-weight: 400;
                font-size: 16px;
                line-height: 140%;
                color: #666;
                text-decoration-line: line-through;
            }

            &-discount {
                padding: 2px 4px;
                border-radius: 4px;
                background: #fbe7e8;
                font-size: 12px;
                font-weight: 600;
                line-height: 140%;
                color: #e6000d;
            }
        }

        &__new {
            font-weight: 600;
            font-size: 28px;
            line-height: 140%;
            color: #141414;
        }

        &__buy {
            display: flex;
            gap: 24px;

            @media screen and (max-width: 1365px) {
                flex-direction: column;
                gap: 16px;
            }
        }
    }

    .PopupBuy__form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-group {
            width: 100%;

            & input {
                padding: 12px 16px;
                background: #fff;
                border-radius: 16px;
                cursor: pointer;
                display: block;
                color: #141414;
                border: 2px solid transparent;
                transition: all 250ms ease-in-out;
                width: -webkit-fill-available;

                &::placeholder {
                    color: #a2a2a2;
                }

                &:hover {
                    border: 2px solid #8c2b02;
                }

                &:focus {
                    border: 2px solid #8c2b02;
                }
            }

            & textarea {
                padding: 12px 16px;
                background: #fff;
                border-radius: 16px;
                cursor: pointer;
                display: block;
                color: #141414;
                border: 2px solid transparent;
                transition: all 250ms ease-in-out;
                outline: none;
                width: 100%;
                font-family: 'Cygre', sans-serif;
                font-size: 16px;

                &::placeholder {
                    color: #a2a2a2;
                }

                &:hover {
                    border: 2px solid #8c2b02;
                }

                &:focus {
                    border: 2px solid #8c2b02;
                }
            }
        }

        .SecondaryButton {
            font-size: 16px;
        }
    }
</style>
