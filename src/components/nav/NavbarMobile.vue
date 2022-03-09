<template>
  <v-app-bar app color="primary" dark elevation="0">
    <div v-bind:style="{ width: '100%' }">
      <div
        v-bind:style="{
          textTransform: 'uppercase',
          color: '#E2664C',
          textAlign: 'center',
          width: '100%',
        }"
      >
        <v-btn text color="white" elevation="0">
          <div>
            <v-icon v-bind:style="{ fontSize: '20px' }"> mdi-home </v-icon>
            <!-- <div v-bind:style="{ fontSize: '10px' }">Home</div> -->
          </div>
        </v-btn>
        <v-btn text color="white" elevation="0">
          <div>
            <v-icon v-bind:style="{ fontSize: '20px' }"
              >mdi-information-outline</v-icon
            >
            <!-- <div v-bind:style="{ fontSize: '10px' }" v-on:click="goto()">
              Experience
            </div> -->
          </div>
        </v-btn>
        <v-btn text color="white" elevation="0">
          <div>
            <v-icon v-bind:style="{ fontSize: '20px' }">mdi-account-box</v-icon>
            <!-- <div v-bind:style="{ fontSize: '10px' }">Contact</div> -->
          </div>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    goto() {
      document.getElementById("work").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>