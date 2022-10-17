<template>
  <div class="content-top">
    <h1>База <small>раздел Аренда</small></h1>
    <ol class="breadcrumb">
      <li class="breadcrumb__item">
        <a href="#" class="breadcrumb__link">
          <font-awesome-icon icon="fa-solid fa-gauge" />
          Главная
        </a>
      </li>
      <li class="breadcrumb__item">База</li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.content-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 24px;

  small {
    color: #777;
    font-size: 15px;
  }
}

.breadcrumb {
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;

  &__item {
    color: #777;

    &:not(:last-child) {
      margin-right: 5px;

      &:after {
        content: ">";
        color: #444;
      }
    }
  }

  &__link {
    color: #444;
    text-decoration: none;
  }
}
</style>
