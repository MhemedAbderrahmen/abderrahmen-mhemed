<template>
  <v-app-bar app color="primary" dark elevation="0">
    <div class="navbar-tools">
      <div v-bind:style="{ textTransform: 'uppercase', color: 'white' }">
        Mhemed Abderrahmen
      </div>

      <v-spacer></v-spacer>

      <v-btn text color="white" elevation="0">

        <span class="mr-2" cl>Home</span>
      </v-btn>
      <v-btn text color="white" elevation="0">

        <span class="mr-2">About</span>
      </v-btn>
      <v-btn text color="white" elevation="0">

        <span class="mr-2">Contact</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.navbar-tools {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.v-btn {
  
  border-radius: 20px;
  font-size: 10px;
}
</style>