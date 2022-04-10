<template>
  <div class="introduction-section">
    <div class="center">
      <h1 v-bind:style="{ textAlign: 'left', color: 'white' }">Capabilites</h1>
      <v-container>
        <v-row gutters>
          <v-col
              cols="12"
              sm="6"
          >
            <SkillsItem
                color="#1D40FB"
                title="Web Developement"
                description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus ratione iste odit, veniam temporibus magnam non voluptatem incidunt numquam nobis sint maxime aliquid accusantium cum hic ullam beatae aspernatur.
      "
            />
          </v-col>
          <v-col
              cols="12"
              sm="6"
          >
            <SkillsItemMobile
                color="#11CC9E"
                title="Mobile Developement"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Repudiandae porro commodi rem at, quas veritatis tempore corporis
      accusamus nulla necessitatibus ullam velit vero placeat accusantium nam
      dolor cum distinctio itaque?"
            />

          </v-col>
        </v-row>
        <v-row gutters>
          <v-col
              cols="12"
              sm="6"
          >
            <SkillsItemGD
                color="#8e16b9"
                title="Game Developement"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Repudiandae porro commodi rem at, quas veritatis tempore corporis
      accusamus nulla necessitatibus ullam velit vero placeat accusantium nam
      dolor cum distinctio itaque?"
            />
          </v-col>
          <v-col sm="6">
            <div style="padding: 1rem">
              <h1>
                Some muisc
              </h1>

              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7hDDgSksl4GRs03YOd3epZ?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

            </div>


          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.introduction-section {
  width: 100%;
  background-color: black;

  padding-top: 5%;
  padding-bottom: 15%;
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
import SkillsItemGD from "@/components/skills/SkillsItemGD";
export default {
  components: {
    SkillsItemGD,
    SkillsItem,
    SkillsItemMobile,
  },
};
</script>