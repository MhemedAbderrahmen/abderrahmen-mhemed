<template>
  <div>
    <div class="title" v-bind:style="{ color: color }">{{ title }}</div>
    <div class="description">
      {{ description }}
    </div>
    <v-row>
      <v-col>
        <ul>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>RabbitMQ</li>
        </ul>
      </v-col>
      <v-col>
        <ul>
          <li>VueJS</li>
          <li>HTML/CSS</li>
          <li>TypeScript</li>
          <li>DenoJS</li>
        </ul>
      </v-col>
      <v-col>
        <ul>
          <li>GraphQL</li>
          <li>Rest</li>
          <li>Express</li>
          <li>Laravel/PHP</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    color: String,
    skills: Array,
  },
};
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
  color: #1d40fb !important;
  font-size: 32px;
}
</style>