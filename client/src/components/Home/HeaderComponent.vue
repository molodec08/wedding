<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="container">
        <div class="header__content">
          <h1>{{ title }}</h1>
          <p>{{ date }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Свадебная вечеринОчка",
      date: "07 августа 2021"
    };
  }
};
</script>

<style src="../../assets/component/Home/header.css" scoped></style>
