
<template>
  <div>
    <div class="title">{{ itemTitle }}</div>
    <div class="description">{{ itemDescription }}</div>
    <div>
      <BadgeItem name="React"/>
      <BadgeItem name="MongoDB"/>
      <BadgeItem name="NodeJS"/>
      <BadgeItem name="ExpressJS"/>
    </div>
    <a v-bind:href="liveLink"  target="_blank">
      <div class="live" v-if="isLive" >
        See it Live <v-icon color="#df0606">mdi-chevron-right </v-icon>
      </div>
    </a>

  </div>

</template>

<script>
import BadgeItem from "@/components/utils/BadgeItem";
export default {
  name: "ItemWork",
  components: {BadgeItem},
  props: {
    itemTitle: String,
    itemDescription: String,
    isLive: Boolean,
    liveLink:String
  },
};
</script>
<style scoped>
div {
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: justify;
}
div .title {
  color: #4452FB;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
  text-align: justify;
  margin-bottom: 1rem;
}

 .live{
  color: #df0606;
  cursor: pointer !important;
  margin-top: 1rem;
}
div .description {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
}
</style>
