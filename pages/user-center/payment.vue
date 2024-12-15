<template>
    <div class="Payment">
        <h1 class="Payment__title"> Оплата: Подробная информация о способах</h1>
        <p class="Payment__descr">
            Мы предлагаем широкий выбор способов оплаты, чтобы каждый клиент мог выбрать наиболее
            удобный для себя вариант. Все транзакции безопасны и проводятся с учетом современных
            стандартов.</p
        >

        <div class="Payment__methods">
            <ol>
                <li>
                    <h3>Наличный расчет <Icon name="tabler:cash" /></h3>
                    <ul>
                        <li>Оплата наличными возможна при получении товара.</li>
                        <li
                            >Удобный вариант для клиентов, предпочитающих расчеты без участия
                            банковских систем.</li
                        >
                        <li>Вы получите чек, подтверждающий факт оплаты.</li>
                    </ul>
                </li>
                <li>
                    <h3>Оплата на расчетный счет (р/с)</h3>
                    <ul>
                        <li>Доступна для юридических и физических лиц.</li>
                        <li
                            >Платеж производится через банк с использованием реквизитов нашей
                            компании.</li
                        >
                        <li
                            >Подходит для безналичных расчетов, особенно если требуется
                            документальное подтверждение платежа.</li
                        >
                        <li
                            >После оплаты мы предоставляем все необходимые документы, включая счет и
                            квитанцию.</li
                        >
                    </ul>
                </li>
                <li>
                    <h3>Оплата банковской картой</h3>
                    <ul>
                        <li
                            >Мы принимаем карты всех основных платежных систем, включая Visa,
                            MasterCard, и Мир.</li
                        >
                        <li
                            >Оплата картой возможна как при доставке курьером, так и в точке
                            самовывоза.</li
                        >
                        <li
                            >Безопасность платежей гарантируется использованием современных
                            технологий шифрования.</li
                        >
                    </ul>
                </li>
                <li>
                    <h3>Онлайн-оплата</h3>
                    <ul>
                        <li>Для удобства клиентов доступна оплата через интернет.</li>
                        <li
                            >Вы можете воспользоваться популярными платежными системами, такими как
                            Yandex Pay, SberPay или другими.</li
                        >
                        <li
                            >Онлайн-оплата доступна 24/7, что позволяет совершать покупки в любое
                            удобное для вас время.</li
                        >
                        <li>Платежи защищены, и вы получите мгновенное подтверждение об оплате.</li>
                    </ul>
                </li>
            </ol>

            <p
                >Мы стремимся сделать процесс покупки теплицы максимально комфортным, поэтому
                предусмотрели различные способы оплаты. Для каждого варианта оплаты мы обеспечиваем
                прозрачность расчетов и предоставляем необходимые документы.</p
            >
        </div>
    </div>
</template>

<script setup lang="ts">
const { setSeo } = useSitewide();

setSeo({
  title: 'Способы оплаты теплиц',
  description: 'Информация о способах оплаты теплиц TeploGarden. Оплата наличными, банковской картой, безналичный расчет для юридических лиц.',
  type: 'website',
  keywords: 'оплата теплиц, способы оплаты teplogarden, как оплатить теплицу, оплата картой теплицы, безналичный расчет теплицы, оплата наличными теплицы, оплата теплицы через интернет, оплата теплицы онлайн, оплата теплицы банковской картой, оплата теплицы р/с, оплата теплицы юрлицом, оплата теплицы физлицом, оплата теплицы курьером, оплата теплицы самовывоз, оплата теплицы безопасно, оплата теплицы счет, оплата теплицы квитанция, оплата теплицы чек',
  robots: 'index, follow'
});

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      {
        name: 'Главная',
        item: 'https://teplogarden.ru'
      },
      {
        name: 'Пользователям',
        item: 'https://teplogarden.ru/user-center'
      },
      {
        name: 'Оплата',
        item: 'https://teplogarden.ru/user-center/payment'
      }
    ]
  }),
  defineWebPage({
    name: 'Способы оплаты теплиц TeploGarden',
    description: 'Информация о способах оплаты теплиц',
    mainContentOfPage: {
      '@type': 'WebPageElement',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.Payment__title', '.Payment-descr']
      }
    },
    offers: {
      '@type': 'Offer',
      acceptedPaymentMethod: [
        'CreditCard',
        'Cash',
        'BankTransfer'
      ]
    }
  })
])
</script>

<style scoped lang="scss">
    .Payment {
        &__title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        &-descr {
            font-size: 16px;
            line-height: 24px;
            color: #666;
            margin-top: 16px;
            line-height: 140%;
        }

        &__methods {
            ol {
                list-style: decimal;
                padding-left: 21px;

                li {
                    margin-top: 24px;

                    h3 {
                        font-size: 20px;
                        font-weight: 700;
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        gap: 8px;

                        & span {
                            width: 24px;
                            height: 24px;
                        }
                    }

                    ul {
                        list-style: disc;
                        padding-left: 21px;
                        margin-top: 16px;

                        li {
                            margin-top: 8px;
                        }
                    }
                }
            }
            p {
                font-size: 16px;
                line-height: 24px;
                color: #666;
                margin-top: 16px;
            }
        }
    }
</style>
