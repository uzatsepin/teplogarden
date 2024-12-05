<template>
    <section class="Contact">
        <div class="Contact__container">
            <OthersTitle>Остались вопросы?</OthersTitle>
        </div>

        <div class="Contact__form">
            <input
                type="text"
                required
                placeholder="Имя"
                class="Contact__form-input"
            />
            <input
                type="text"
                required
                placeholder="Телефон"
                class="Contact__form-input"
            />
            <OthersPrimaryButton>Оставить заявку</OthersPrimaryButton>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .Contact {
        max-width: 320px;
        margin: 32px auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__form {
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;

            &-input {
                padding: 12px 16px;
                background: #fff;
                border-radius: 16px;
                cursor: pointer;
                display: block;
                color: #141414;
                border: 2px solid transparent;
                transition: all 250ms ease-in-out;

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
    }
</style>
