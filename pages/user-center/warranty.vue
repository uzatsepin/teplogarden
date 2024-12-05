<template>
    <div class="Warranty">
        <h1 class="Warranty__title">Гарантия: Подробная информация</h1>
        <p class="Warranty__descr"
            >Мы уверены в качестве наших теплиц и предлагаем надежные условия гарантии, чтобы вы
            могли быть уверены в долговечности приобретенного оборудования.</p
        >
        <div class="Warranty__term">
            <NuxtImg
                src="/images/warranty.jpg"
                height="350"
            />
            <div class="Warranty__term-text">
                <h2 class="Warranty__term-title">12 месяцев безусловной гарантии</h2>
                <p class="Warranty__term-descr"
                    >На все теплицы распространяется стандартная гарантия сроком на 12 месяцев.</p
                >
            </div>
        </div>
        <div class="Warranty__text">
            <h3>1. Срок и условия гарантии</h3>
            <ul>
                <li
                    ><strong>Год безусловной гарантии:</strong> На все теплицы распространяется
                    стандартная гарантия сроком на 12 месяцев.</li
                >
                <li
                    ><strong>Возможность продления гарантийного периода:</strong> Вы можете продлить
                    гарантию по индивидуальному запросу, чтобы получить дополнительное
                    спокойствие.</li
                >
                <li
                    ><strong>Сервисные выезды для комплектов "Оптимум" и выше:</strong>
                    <ul>
                        <li
                            >При выборе этих комплектаций в течение гарантийного срока вы получаете
                            два сервисных выезда в год.</li
                        >
                        <li>Первый выезд — перед началом зимнего периода.</li>
                        <li>Второй выезд — после завершения зимы.</li>
                    </ul>
                </li>
                <li
                    ><strong>Постгарантийное обслуживание:</strong> Предоставляем возможность
                    продлить обслуживание теплицы после окончания гарантийного периода. Это включает
                    регулярные проверки и устранение неполадок.</li
                >
            </ul>
            <h3>2. Процедура обращения по гарантии</h3>
            <p>Мы сделали процесс обращения максимально простым и удобным:</p>
            <ol>
                <li
                    >Клиент связывается с персональным менеджером по телефону или через
                    мессенджеры.</li
                >
                <li>Сообщается суть проблемы или заявляется гарантийный случай.</li>
                <li
                    >Наша сервисная бригада анализирует заявку и согласовывает удобную для вас дату
                    выезда.</li
                >
                <li
                    >Бригада приезжает на объект и устраняет проблему в рамках гарантийных
                    обязательств.</li
                >
            </ol>

            <h3>3. Исключения из гарантийных обязательств</h3>
            <ul>
                <li
                    >Разбитое стекло теплицы не входит в перечень гарантийных случаев. Это
                    обусловлено особенностями эксплуатации и риском повреждения от внешних
                    факторов.</li
                >
            </ul>

            <p>
                Teplogarden предлагает не только качественную продукцию, но и полный спектр гарантийных и
                сервисных услуг. Наша цель — обеспечить комфортное использование теплицы на долгие
                годы, минимизировав любые риски.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .Warranty {
        &__title {
            font-size: 24px;
            font-weight: 700;
            line-height: 140%;
        }

        &__descr {
            font-size: 16px;
            line-height: 24px;
            color: #666;
            margin-top: 16px;
            line-height: 140%;
        }

        &__term {
            position: relative;
            margin-top: 24px;

            & img {
                border-radius: 16px;
                width: 100%;
                object-fit: cover;
                overflow: hidden;
                filter: blur(1px);
            }

            &-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            &-title {
                font-size: 28px;
                font-weight: 700;
                line-height: 140%;
                color: #fff;
                text-align: center;
            }
            &-descr {
                text-align: center;
                font-size: 16px;
                line-height: 24px;
                color: #fff;
                margin-top: 16px;
                line-height: 140%;
            }
        }

        &__text {
            margin-top: 24px;

            & h3 {
                font-size: 20px;
                font-weight: 700;
                margin-top: 16px;
            }

            & ul {
                list-style: disc;
                padding-left: 21px;
                margin-top: 16px;

                & li {
                    margin-top: 16px;
                }

                & strong {
                    font-weight: 700;
                }
            }

            & ol {
                list-style: decimal;
                padding-left: 21px;
                margin-top: 16px;

                & li {
                    margin-top: 16px;
                }
            }

            & p {
                font-size: 16px;
                line-height: 24px;
                color: #666;
                margin-top: 16px;
                line-height: 140%;
            }
        }
    }
</style>
