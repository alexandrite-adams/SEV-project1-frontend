<template>
  <v-container fluid class="fill-height bg-primary">
    <v-row class="fill-height pa-0 ma-0" justify="center">
      <v-col class="pa-0 ma-0">
        <v-expansion-panels variant="accordion" multiple>
          <v-expansion-panel
            bg-color="primary"
            prominent
            class="elevation-0 pa-0 ma-0"
            v-for="(menu, index) in menus"
            :key="index"
            :value="index"
            :title="menu.title"
          >
            <v-expansion-panel-text class="pa-0 ma-0">
              <v-container class="pa-0 ma-0">
                <v-row
                  v-for="(link, index) in menu.links"
                  :key="index"
                  :value="index"
                  class="pa-0 ma-0"
                >
                  <v-col class="pa-0 ma-0">
                    <v-btn
                      block
                      color="primary"
                      prominent
                      class="elevation-0"
                      @click="changeComp(link)"
                    >
                      {{ link }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainNav",
  props: {},
  components: {},
  data() {
    return {
      drawer: false,
      selectedItem: "",
      menus: [
        {
          title: "Student",
          links: [
            "Repertoire",
            "Your Events",
            "Event Sign-Ups",
            "Your Critiques",
            "Recordings",
          ],
        },
        {
          title: "Faculty",
          links: [
            "Student Critiques",
            "Create Event Critique",
            "Event Availability",
          ],
        },
        {
          title: "Accompanist",
          links: ["Event Availability"],
        },
        {
          title: "Admin",
          links: ["Create Event", "Events"],
        },
      ],
    };
  },
  emits: ["changeComp"],
  setup(props, { emit }) {
    const changeComp = (link) => {
      console.log(link);
      emit("changeComp", link);
    };
    return {
      changeComp,
    };
  },
  methods: {},
});
</script>

<style scoped>
.v-expansion-panel-text__wrapper {
  padding: 0 !important;
  margin: 0;
}
</style>
