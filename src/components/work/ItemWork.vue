
<template>
  <div>
    <div class="title">{{ itemTitle }}</div>
    <div>{{ itemDescription }}</div>
    <div class="live" v-if="isLive">
      See it Live <v-icon color="#df0606">mdi-chevron-right </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemWork",
  props: {
    itemTitle: String,
    itemDescription: String,
    isLive: Boolean,
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
  color: #ff8164;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
  text-align: justify;
  margin-bottom: 1rem;
}

div .live {
  color: #df0606;
  cursor: pointer !important;
  margin-top: 1rem;
}
</style>
