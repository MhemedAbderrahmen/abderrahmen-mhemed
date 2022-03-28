
<template>
  <div class="introduction-section">
    <div class="center">
      <div class="title" v-bind:style="{ color: 'white' }">
        I'm ready to design, develop and deploy your solutions.
      </div>
      <p class="description">
        An enthusiastic software engineer currently shaping the future of software developement by desiging smooth user-interfaces that promote user interaction with information and data.
        While traveling around the world
      </p>
      <p class="link" v-on:click="goto()" v-bind:style="{fontWeight:'bold'}">
        SCROLL FOR MORE!
        <v-icon color="secondary" class="arrow">mdi-chevron-down</v-icon>
      </p>
    </div>
  </div>
</template>

<style scoped>
.introduction-section {
  width: 100%;
  /*background-color: black;*/
  padding-top: 15%;
  padding-bottom: 15%;
}
.center {
  margin: auto;
  width: 80%;
  padding: 10px;
}
div .title {
  padding-bottom: 1rem;
  color: white;
  font-size: 38px !important;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
}
p {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
}

.link {
  color: #4452FB !important;
  cursor: pointer !important;
}
.arrow {
  animation: MoveUpDown 1.75s linear infinite;
}

@keyframes MoveUpDown {
  0%, 100% {
    bottom: -2px;
  }
  50% {
    bottom: 5px;
  }
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