<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-col cols="2" class="bg-blue">
        <MainNav @changeComp="changeComponent"></MainNav>
      </v-col>
      <v-col cols="10" class="bg-white">
        <!-- Your components go here -->
        <div class="grid-container">
          <StudentHome v-if="route === 'Repertoire'"></StudentHome>
          <TestEx v-else-if="route === 'Your Events'"></TestEx>
          <StudentEventList
            v-else-if="route === 'Event Sign-Ups'"
            @SignUpForEventObject="changeToEventFormSignUp"
          ></StudentEventList>
          <StudentEventSignUp
            v-else-if="route === 'Event Form Sign-Up'"
            :eventOb="eventOb"
          ></StudentEventSignUp>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Import all components and insert into homepage
import MainNav from "../components/MainNav.vue";
import StudentHome from "../components/StudentHome.vue";
import TestEx from "../components/TestEx.vue";
import StudentEventList from "../components/StudentEventList.vue";
import StudentEventSignUp from "../components/StudentEventSignUp.vue";
export default {
  name: "HomeView",
  components: {
    MainNav, //Left navigation panel
    StudentHome, //Landing Page for the Students
    TestEx, //
    StudentEventList, //Student page to select event and time to sign up
    StudentEventSignUp,
  },
  data: () => ({
    role: "",
    route: "",
    eventOb: {},
  }),
  created() {},
  methods: {
    changeComponent(link) {
      console.log(link);
      this.route = link;
      console.log(this.route === "Repertoire");
    },
    changeToEventFormSignUp(eventOb) {
      console.log(eventOb);
      this.eventOb = eventOb;
      this.changeComponent("Event Form Sign-Up");
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
