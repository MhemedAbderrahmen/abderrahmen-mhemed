<template>
  <div>
    <div class="title" v-bind:style="{ color: color }">{{ title }}</div>
    <div class="description">
      {{ description }}
    </div>
    <v-row>
      <v-col>
        <ul>
          <li>Unity</li>
          <li>Unreal Engine 4</li>
          <li>Godot</li>
          <li>RPGMaker</li>
        </ul>
      </v-col>
      <v-col>
        <ul>
          <li>C#</li>
          <li>Java</li>
          <li>C++</li>
          <li>C</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SkillsItemGD",
  props: {
    title: String,
    description: String,
    color: String,
    skills: Array,
  },
}
</script>

<style scoped>
div .title {
  padding-bottom: 1rem !important;
  padding-top: 1rem !important;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
  font-size: 22px !important;
}
li {
  /* padding: 1rem !important; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
}
ul ::marker {
  color: #8e16b9 !important;
  font-size: 32px;
}
</style>