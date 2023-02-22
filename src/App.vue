<template>
  <!-- The bread and butter of what our page has in it -->
  <v-app>
      <!-- App bar is the top 'navigation' that has the image name and login on top right -->
      <v-app-bar
        color="primary"
        prominent
        class="elevation-0"
      >
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
      <!-- get rid of this one end for v app bar when finishing nav -->
      </v-app-bar>
        <!-- <v-list-item 
          nav
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
          @click.stop="drawer = !drawer"
        ></v-list-item> -->
        <!-- <template v-slot:activator="{ props }">
          <v-btn prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg" v-bind="props"></v-btn>
        </template>
      </v-app-bar>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-navigation-drawer
        location="right"
      >
        
        <v-divider></v-divider>
        <v-list density="compact" nav :items="myItems">
        </v-list>
      </v-navigation-drawer> -->
      <!-- hidden only comes up sometimes -->
      <!-- <v-navigation-drawer
        v-model="drawer"
        
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer> -->

      <!-- Where all the main code should actually live-->
      <v-main>
        <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
  import HomeView from "./views/HomeView.vue";
  import ocLogo from "/oc_logo_social.png";
  export default {
    name: 'App',
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
          prependIcon:'mdi-account',
          title: 'Switch Account',
          value: 'switchAcc',
        },
        {
          prependIcon:'mdi-account-settings-variant',
          title: 'Settings',
          value: 'settings',
        },
        {
          prependIcon:'mdi-logout',
          title: 'Log-out',
          value: 'logout',
        },
      ],
    }),
    async created() {
      this.logoURL = ocLogo;
      // this.resetMenu();
    },

    watch: {
      group () {
        this.drawer = true
      },
    },
  }
</script>
