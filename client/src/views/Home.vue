<template>
  <HeaderComponent />
  <AboutComponent />
  <GuestComponent />
</template>

<script>
import HeaderComponent from "../components/Home/HeaderComponent";
import AboutComponent from "../components/Home/AboutComponent";
import GuestComponent from "../components/Home/GuestComponent";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    AboutComponent,
    GuestComponent
  }
};
</script>

<style src="../assets/reset.css"></style>
