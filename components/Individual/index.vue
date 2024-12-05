<template>
  <section class="Individual">
    <div class="Individual__container">
      <OthersTitle>Индивидуальные теплицы</OthersTitle>

      <div class="Individual__content">
        <NuxtImg class="Individual__content-img" src="https://placehold.co/400x444" />
        <div class="Individual__content-text">
          <h3 class="Individual__content-text-title">
            Ищете идеальное решение для выращивания растений круглый год?
          </h3>
          <p class="Individual__content-text-descr">
            Компания <span>Teplogarden</span> предлагает индивидуальные теплицы,
            разработанные специально для ваших нужд! Мы создаем теплицы любого размера и
            формы, учитывая особенности вашего участка и пожелания. Надежные материалы,
            продуманные конструкции и современный дизайн гарантируют долговечность и
            максимальную эффективность. Заказывая теплицу у нас, вы получаете не только
            качественный продукт, но и профессиональный монтаж, а также поддержку на всех
            этапах эксплуатации. Пусть ваши растения растут в комфортных условиях круглый
            год вместе с <span>Teplogarden</span>!
          </p>
        </div>
      </div>

      <div class="Individual__content reversed">
        <NuxtImg class="Individual__content-img" src="https://placehold.co/400x444" />
        <div class="Individual__content-text">
          <h3 class="Individual__content-text-title">
            Компания <span>Teplogarden</span> гордится своей многолетней экспертностью в
            создании теплиц.
          </h3>
          <p class="Individual__content-text-descr">
            Наши специалисты обладают глубокими знаниями и богатым опытом в области
            тепличных технологий, что позволяет нам предлагать клиентам только лучшие
            решения. Мы тщательно анализируем потребности каждого заказчика, чтобы создать
            теплицу, идеально подходящую для конкретных условий выращивания. В нашем
            портфолио – сотни успешно реализованных проектов, от компактных садовых теплиц
            до крупных сельскохозяйственных комплексов. Наша команда всегда в курсе
            новейших тенденций и технологий, что позволяет нам обеспечивать высочайший
            стандарт качества и надежности. Доверьте свою теплицу профессионалам
            <span>Teplogarden</span> – и вы получите результат, превосходящий ожидания!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.Individual {
  margin-top: 48px;

  &__container {
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 36px;

    .title {
      text-align: center;
    }
  }

  &__content {
    display: flex;
    gap: 36px;
    align-items: center;

    &.reversed {
      flex-direction: row-reverse;
    }

    &-img {
      min-width: 400px;
      height: 444px;
      border-radius: 16px;
      overflow: hidden;
    }

    &-text {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-title {
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
      }

      &-descr {
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;

        & span {
          font-weight: 600;
          color: $red;
        }
      }
    }
  }
}
</style>
