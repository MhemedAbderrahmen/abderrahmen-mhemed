  <template>
    <div>
      <div class="title" v-bind:style="{ color: color }">{{ title }}</div>
      <div class="description">
        {{ description }}
      </div>
      <v-row>
        <v-col>
          <ul>
            <li>ReactNative</li>
            <li>Firebase</li>
            <li>Unity</li>
            <li>C#</li>
          </ul>
        </v-col>
        <v-col>
          <ul>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Dart</li>
            <li>Flutter</li>
          </ul>
        </v-col>
        <v-col>
          <ul>
            <li>Ionic</li>
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
  color: #11CC9E !important;
  font-size: 32px;
}
</style>