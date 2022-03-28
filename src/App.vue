<template>
  <v-app v-bind:style="{ backgroundColor: '#222222' }">
    <div v-if="mobile"><NavbarMobile /></div>
    <div v-else><NavbarWeb /></div>

    <v-main>
      <video-background
          src='https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-for-Testing.mp4'
          style="max-height: 600px; height: 100vh;"
          overlay="
linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 20%, rgba(135,135,135,0) 80%, rgba(0,0,0,0.9755252442773985) 100%)"
      >
      <IntroductionSection />
    </video-background>
      <WorkSection />
      <SkillsSection />
    </v-main>
    <FooterGeneral />
  </v-app>
</template>

<script>
import FooterGeneral from "./components/FooterGeneral";
import IntroductionSection from "./components/IntroductionSection";
import WorkSection from "./components/WorkSection";
import NavbarWeb from "./components/nav/NavbarWeb.vue";
import NavbarMobile from "./components/nav/NavbarMobile.vue";
import SkillsSection from "./components/skills/SkillsSection.vue";
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: "App",
  components: {
    FooterGeneral,
    IntroductionSection,
    WorkSection,
    NavbarWeb,
    NavbarMobile,
    SkillsSection,
    VideoBackground
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.isMobile()) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  },
  data: () => ({
    mobile: false,
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css? family=Comfortaa&display=swap");

.v-application {
  font-family: "Roboto", sans-serif !important;
}
</style>