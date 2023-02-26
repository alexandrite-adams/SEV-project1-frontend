<template>
  <!-- The bread and butter of what our page has in it -->
  <v-app>
    <!-- App bar is the top 'navigation' that has the image name and login on top right -->
    <v-app-bar color="primary" prominent class="elevation-0">
      <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <template v-slot:prepend>
        <!-- OC logo image -->
        <v-img
          class="mx-2"
          :src="logoURL"
          height="50"
          width="50"
          contain
          transition="scale-transition"
        ></v-img>
      </template>
      <!-- OC Music Dept title in top bar -->
      <v-toolbar-title class="title">
        {{ this.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- Where all the main code should actually live-->
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import ocLogo from "/oc_logo_social.png";
export default {
  name: "App",
  components: {
    ocLogo,
    HomeView,
  },
  data: () => ({
    title: "OC Music Department",
    drawer: true,
    group: null,
    myItems: [
      {
        prependIcon: "mdi-account",
        title: "Switch Account",
        value: "switchAcc",
      },
      {
        prependIcon: "mdi-account-settings-variant",
        title: "Settings",
        value: "settings",
      },
      {
        prependIcon: "mdi-logout",
        title: "Log-out",
        value: "logout",
      },
    ],
  }),
  async created() {
    this.logoURL = ocLogo;
    // this.resetMenu();
  },

  watch: {
    group() {
      this.drawer = true;
    },
  },
};
</script>
