<template>
  <section class="guests">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="guests-list">
        <div v-for="guest in guestsList" :key="guest.id" class="item">
          <img :src="guest.img" alt="item1" />
          <h3>{{ guest.name }}</h3>
          <p>{{ guest.desc }}</p>
        </div>
      </div>
    </div>
    <button @click="view">Test</button>
  </section>
</template>

<script>
import PostsGuests from "@/services/PostsGuests";
export default {
  data() {
    return {
      title: "Кого мы ждём, и не очень:",
      guestsList: []
    };
  },
  created: function() {
    PostsGuests.fetchGuests().then(res => {
      this.guestsList = res.data;
    });
  },
  methods: {}
};
</script>

<style src="../../assets/component/Home/guests.css"></style>
