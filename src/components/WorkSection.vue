
<template>
  <div class="introduction-section" id="work">
    <h1 v-bind:style="{ textAlign: 'center', color: 'white' }">
      Professional Experience
    </h1>
    <div class="center">
      <v-row
        v-bind:style="{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }"
      >
        <v-col>
          <ItemWork
            itemTitle="mygameplace.io"
            itemDescription="mygameplace is an digital currency platform where users can purchase any type of their prefered digital cards or gift cards, mygameplace guarantees user's confort through partnerships with popular and secure payment methods."
            isLive
            liveLink="https://mygameplace.io"
          />
        </v-col>
        <v-col>
          <v-img
            src="@/assets/mygameplaceio.png"
            width="500px"
          />
        </v-col>
      </v-row>
      <v-divider class="divider-items"></v-divider>
      <v-row
        v-bind:style="{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }"
      >
        <v-col>
          <v-img
            src="@/assets/ohmygameio.png"
            width="500px"
          />
        </v-col>
        <v-col>
          <ItemWork
            itemTitle="ohmygame.io"
            itemDescription="Ohmygame.io is a web platform that contains over 250 HTML games, users have the ability to join this platform by paying a small fee, once subscribed on the platform they have access to those games, with an access to different quests achievements and rewards."
            isLive
            liveLink="https://ohmygame.io"
          />
        </v-col>
      </v-row>
      <v-row
        v-bind:style="{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }"
      >
        <v-col>
          <v-img
            src="@/assets/ohmygamegg.png"
            width="500px"
          />
        </v-col>
        <v-col>
          <ItemWork
            itemTitle="ohmygame.gg"
            itemDescription="
Ohmygame.gg is an E-Sports web platform, this web application handles users registrations to different tournaments of multiple games, there is weekly and monthly tournaments that are hosted with thousands of players joining it and competing for diffrent rewards."
            isLive
            liveLink="https://ohmygame.gg"
          />
        </v-col>

      </v-row>
      <v-row> <ReviewItem /> </v-row>
    </div>
  </div>
</template>

<style scoped>
.introduction-section {
  width: 100%;
  background-color: black;
  padding-top:15%;
}
.center {
  margin: auto;
  width: 80%;
  padding: 10px;
}
h1 {
  padding-bottom: 1rem;
  color: "white";
  font-size: 32px !important;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
}
p {
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.link {
  color: #4452FB !important;
}
v-row {
  padding-bottom: 5rem !important;
}
</style>

<script>
import ItemWork from "./work/ItemWork.vue";
import ReviewItem from "./user-reviews/ReviewItem.vue";
export default {
  name: "WorkSection",

  components: {
    ItemWork,
    ReviewItem,
  },

  data: () => ({
    //
  }),
};
</script>
