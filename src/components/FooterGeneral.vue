<template>
  <v-footer fixed padless v-bind:style="{ width: '100%' }">
    <v-card
      flat
      tile
      class="red lighten-1 text-center"
      width="100%"
      color="secondary"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px" color="primary">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text color="primary">
        {{ new Date().getFullYear() }} — <strong>Porfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style scoped>
</style>
<script>
export default {
  name: "FooterGeneral",
  data: () => ({
    icons: ["mdi-facebook", "mdi-email", "mdi-youtube", "mdi-twitter"],
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};  
</script>