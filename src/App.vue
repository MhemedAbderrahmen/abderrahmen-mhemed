<template>
  <v-app v-bind:style="{ backgroundColor: '#222222' }">
    <v-app-bar app color="primary" dark elevation="0">
      <div class="navbar-tools">
        <div v-bind:style="{ textTransform: 'uppercase', color: '#E2664C' }">
          Mhemed Abderrahmen
        </div>

        <v-spacer></v-spacer>

        <v-btn color="secondary" elevation="0">
          <v-icon v-bind:style="{ fontSize: '16px', padding: '0.2rem' }"
            >mdi-home</v-icon
          >
          <span class="mr-2" cl>Home</span>
        </v-btn>
        <v-btn color="secondary" elevation="0">
          <v-icon v-bind:style="{ fontSize: '16px', padding: '0.2rem' }"
            >mdi-information-outline</v-icon
          >
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn color="secondary" elevation="0">
          <v-icon v-bind:style="{ fontSize: '16px', padding: '0.2rem' }"
            >mdi-account-box</v-icon
          >
          <span class="mr-2">Contact</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <IntroductionSection />
      
      <WorkSection />
    </v-main>
    <FooterGeneral />
  </v-app>
</template>

<script>
import FooterGeneral from "./components/FooterGeneral";
import IntroductionSection from "./components/IntroductionSection";
import WorkSection from "./components/WorkSection";

export default {
  name: "App",

  components: {
    FooterGeneral,
    IntroductionSection,
    WorkSection,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css? family=Comfortaa&display=swap");

.navbar-tools {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.v-application {
  font-family: "Roboto", sans-serif !important;
}
.v-btn {
  margin-right: 1rem;
  border-radius: 20px;
  font-size: 12px;
}
</style>