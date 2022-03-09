
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
            itemDescription="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae accusantium soluta hic nulla molestias quos ad quasi ipsam, aperiam aut in excepturi, quibusdam minus ipsum similique neque sapiente accusamus!"
            isLive
            liveLink="https://mygameplace.io"
          />
        </v-col>
        <v-col>
          <v-img
            src="https://uploads-ssl.webflow.com/5cd3f797ed444018363216ca/5cd480c363a1fef1d169f1f8_burt.png"
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
            src="https://uploads-ssl.webflow.com/5cd3f797ed444018363216ca/5cd48172a1024f1833ee86f4_greenride.png"
            width="500px"
          />
        </v-col>
        <v-col>
          <ItemWork
            itemTitle="ohmygame.io"
            itemDescription="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae accusantium soluta hic nulla molestias quos ad quasi ipsam, aperiam aut in excepturi, quibusdam minus ipsum similique neque sapiente accusamus!"
            isLive
            liveLink="https://mygameplace.io"
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
            src="https://uploads-ssl.webflow.com/5cd3f797ed444018363216ca/5cd48172a1024f1833ee86f4_greenride.png"
            width="500px"
          />
        </v-col>
        <v-col>
          <ItemWork
            itemTitle="ohmygame.gg"
            itemDescription="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae accusantium soluta hic nulla molestias quos ad quasi ipsam, aperiam aut in excepturi, quibusdam minus ipsum similique neque sapiente accusamus!"
            isLive
            liveLink="https://mygameplace.io"
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
