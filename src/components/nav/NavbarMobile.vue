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
        <v-btn text color="secondary" elevation="0">
          <v-icon v-bind:style="{ fontSize: '20px' }"> mdi-home </v-icon>
        </v-btn>
        <v-btn text color="secondary" elevation="0">
          <v-icon v-bind:style="{ fontSize: '20px' }"
            >mdi-information-outline</v-icon
          >
        </v-btn>
        <v-btn text color="secondary" elevation="0">
          <v-icon v-bind:style="{ fontSize: '20px' }">mdi-account-box</v-icon>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>