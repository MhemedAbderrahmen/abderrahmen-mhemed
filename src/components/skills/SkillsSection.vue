<template>
  <div class="introduction-section">
    <div class="center">
      <h1 v-bind:style="{ textAlign: 'left', color: 'white' }">Capabilites</h1>
      <SkillsItem
        color="#1D40FB"
        title="Web Developement"
        description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus ratione iste odit, veniam temporibus magnam non voluptatem incidunt numquam nobis sint maxime aliquid accusantium cum hic ullam beatae aspernatur.
      "
      />
      <br />

      <SkillsItemMobile
        color="#11CC9E"
        title="Mobile Developement"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Repudiandae porro commodi rem at, quas veritatis tempore corporis
      accusamus nulla necessitatibus ullam velit vero placeat accusantium nam
      dolor cum distinctio itaque?"
      />
    </div>
  </div>
</template>

<style scoped>
.introduction-section {
  width: 100%;
  background-color: black;
  height: 100%;
  padding-top: 15%;
}
.center {
  color: white;
  margin: auto;
  width: 80%;
}
</style>
<script>
import SkillsItem from "./SkillsItem.vue";
import SkillsItemMobile from "./SkillsItemMobile.vue";
export default {
  components: {
    SkillsItem,
    SkillsItemMobile,
  },
};
</script>