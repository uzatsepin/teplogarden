<template>
    <section class="Contact">
        <div class="Contact__container">
            <OthersTitle>Остались вопросы?</OthersTitle>
        </div>

        <div class="Contact__form">
            <input
                type="text"
                required
                placeholder="Ваше имя"
                class="Contact__form-input"
                v-model="form.name"
            />
            <input
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                pattern="[+]7[\(]\d{3}[\)]\d{3}[-]\d{2}[-]\d{2}"
                class="Contact__form-input"
                v-model="form.phone"
                v-maska
                data-maska="+7 (###) ###-##-##"
                aria-label="Phone number"
            />
            <OthersPrimaryButton
                @click="handleSubmit"
                :disabled="!form.name || !form.phone"
                >Оставить заявку</OthersPrimaryButton
            >
            <Transition name="fade">
                <div
                    v-if="showSuccessPopup"
                    class="Contact__popup"
                >
                    <div class="Contact__popup-content">
                        <Icon
                                name="mdi:check-circle"
                                class="Contact__popup-icon"
                            />
                            <p class="Contact__popup-text"> Заявка успешно отправлена. 
                            <br />
                            <br />
                            Наш менеджер свяжется с вами в ближайшее время </p>

                        <Icon
                            name="charm:cross"
                            class="Contact__popup-close"
                            @click="showSuccessPopup = false"
                        />
                    </div>
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { useAdditionalsStore } from '~/store/additionalsStore';
    import { vMaska } from 'maska/vue';

    const additionalsStore = useAdditionalsStore();

    const showSuccessPopup = ref(false);
    const form = reactive({
        name: '',
        phone: '',
    });

    const handleSubmit = async () => {
        try {
            await additionalsStore.createApplication({
                name: form.name,
                phone: form.phone,
                place: 'footer',
                status: 'new',
            });

            form.name = '';
            form.phone = '';
            showSuccessPopup.value = true;

            setTimeout(() => {
                showSuccessPopup.value = false;
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    };
</script>

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

        &__popup {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;

            &-content {
                background: white;
                padding: 32px;
                border-radius: 12px;
                text-align: center;
                position: relative;
                max-width: 400px;
            }

            &-icon {
                font-size: 48px;
                color: #4caf50;
                margin-bottom: 16px;
            }

            &-close {
                position: absolute;
                top: 16px;
                right: 16px;
                font-size: 24px;
                cursor: pointer;
                color: #666;

                &:hover {
                    color: #333;
                }
            }

            &-text {
                font-size: 18px;
            }
        }
    }
</style>
