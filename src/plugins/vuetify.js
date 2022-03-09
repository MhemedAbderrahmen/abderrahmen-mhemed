import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#00000B",
        secondary: "#1D40FB",
        accent: "#8c9eff",
        error: "#b71c1c",
        white:"white",
      },
    },
  },
});
