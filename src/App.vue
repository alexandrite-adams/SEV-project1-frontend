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
      <v-menu bottom min-width="200px" rounded offset-y v-if="user != null">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon x-large>
            <v-avatar v-if="user != null" color="secondary">
              <span class="accent--text font-weight-bold">{{ initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="secondary" class="mt-2 mb-2">
                <span class="accent--text font-weight-bold">{{
                  initials
                }}</span>
              </v-avatar>
              <h3>{{ name }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout()"> Logout </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>
    <!-- Where all the main code should actually live-->
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HomeView from "./views/HomeView.vue";
import ocLogo from "/oc_logo_social.png";
import Utils from "./config/utils.js";
import AuthServices from "./services/authServices.js";

export default {
  name: "App",
  components: {
    ocLogo,
    // HomeView,
  },
  data: () => ({
    user: {},
    title: "OC Music Department",
    initials: "",
    name: "",
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
    this.resetMenu();
  },
  async mounted() {
    this.resetMenu();
  },
  methods: {
    resetMenu() {
      this.user = null;
      // ensures that their name gets set properly from store
      this.user = Utils.getStore("user");
      if (this.user != null) {
        this.initials = this.user.fName[0] + this.user.lName[0];
        this.name = this.user.fName + " " + this.user.lName;
      }
    },
    logout() {
      AuthServices.logoutUser(this.user)
        .then((response) => {
          console.log(response);
          Utils.removeItem("user");
          this.$router.push({ name: "loginPage" });
          location.reload();
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  watch: {
    group() {
      this.drawer = true;
    },
  },
};
</script>
