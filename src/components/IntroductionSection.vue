
<template>
  <div class="introduction-section">
    <div class="center">
      <div class="title" v-bind:style="{ color: 'white' }">
        I'm ready to design, develop and deploy your solutions.
      </div>
      <p class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
        quibusdam qui dolorem aliquid, consequatur velit, cum repellendus,
        repudiandae harum neque veritatis quisquam temporibus ut doloremque
        fugit nam porro pariatur aut.
      </p>
      <p class="link" v-on:click="goto()">
        Checkout out my work!
        <v-icon color="secondary">mdi-chevron-down</v-icon>
      </p>
    </div>
  </div>
</template>

<style scoped>
.introduction-section {
  width: 100%;
  background-color: #1d1d1d;
  padding-top: 15%;
}
.center {
  margin: auto;
  width: 60%;
  padding: 10px;
}
div .title {
  padding-bottom: 1rem;
  color: "white";
  font-size: 38px !important;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
}
p {
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
}

.link {
  color: #ff8164 !important;
  cursor: pointer !important;
}
</style>
<script>
export default {
  methods: {
    goto() {
      document.getElementById("work").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>