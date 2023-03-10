<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-select
          clearable
          v-model="searchByIndex"
          label="Search by"
          :items="searchByList"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>

  <v-divider></v-divider>

  <v-container v-if="searchByIndex == 'Event Date'">
    <v-row>
      <v-col cols="4">
        <v-combobox
          clearable
          v-model="selectedSemester"
          label="Semester (optional)"
          :items="semesters"
          item-value="id"
          item-title="title"
          @update:modelValue="semesterSearchUpdate()"
        ></v-combobox>
      </v-col>
      <v-col cols="1"> </v-col>
      <v-col cols="4">
        <v-combobox
          clearable
          v-model="selectedEvent"
          label="Events"
          :items="filteredEvents"
          item-value="id"
          item-title="title"
          @update:modelValue="eventSearchUpdate()"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <v-data-table
          :headers="stuHeaders"
          :items="critiques"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else-if="searchByIndex == 'Student Name'">test 2</v-container>
</template>
<script>
import SemesterDataService from "../../services/SemesterDataService";
import EventDataService from "../../services/EventDataService";
export default {
  name: "facultyCritiqueView",
  data: () => ({
    semesters: [],
    selectedSemester: null,
    events: [],
    filteredEvents: [],
    selectedEvent: null,
    searchByList: ["Event Date", "Student Name"],
    searchByIndex: null,
    critiques: [],
    stuHeaders: [
      { title: "First Name", align: "start", key: "studentFName" },
      { title: "Last Name", align: "start", key: "studentLName" },
      { title: "", align: "start", sortable: false },
      { title: "", align: "start", sortable: false },
      {
        title: "Action",
        align: "end",
        sortable: false,
      },
    ],
  }),
  methods: {
    async retrieveAllSemesters() {
      await SemesterDataService.getAll()
        .then((response) => {
          this.semesters = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async retrieveAllEvents() {
      await EventDataService.getAll()
        .then((response) => {
          this.events = response.data;
          this.events.reverse();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    semesterSearchUpdate() {
      if (
        this.selectedSemester === null ||
        this.selectedSemester === undefined
      ) {
        this.filteredEvents = this.events;
      } else {
        if (this.selectedSemester.id !== undefined) {
          this.filteredEvents = this.events.filter(
            (obj) => obj.semesterId === this.selectedSemester.id
          );
        }
      }
    },
    async eventSearchUpdate() {
      if (this.selectedEvent === null || this.selectedEvent === undefined) {
        this.critiques = [];
      } else {
        if (this.selectedEvent.id !== undefined) {
          await EventDataService.getCritiques(this.selectedEvent.id)
            .then((response) => {
              this.critiques = response.data;
            })
            .catch((e) => {
              console.log(e);
            });
        }
      }
    },
  },
  async mounted() {
    await this.retrieveAllSemesters();
    await this.retrieveAllEvents();
    this.semesters.forEach((obj) => (obj.title = obj.year + " - " + obj.code));
    this.events.forEach((obj) => (obj.title = obj.type + " - " + obj.date));
    this.filteredEvents = this.events;
  },
  components: {},
};
</script>
