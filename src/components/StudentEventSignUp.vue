<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h3>{{ event.type }} trewkjhsdfkhj</h3>
        </v-col>
        <v-col>
          <h3>{{ event.date }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h5>{{ student.instructor }}</h5>
        </v-col>
        <v-col>
          <h5>{{ student.instrument }}</h5>
        </v-col>
      </v-row>
    </v-container>
    <v-card
      v-for="(index, song) in songs"
      :key="index"
      :title="song.title"
      :subtitle="song.composer"
    >
      <!-- figure out how to v-model each song's translation checkbox -->
      <v-checkbox
        v-model="song.needsTranslation"
        label="translation required"
        value="true"
      ></v-checkbox>
      <input v-model="translation.text" />
    </v-card>
    <!-- make button work -->
    <v-btn>Add Song</v-btn>
  </div>
</template>

<script>
// Get translations
// Get songs
// import StudentDataService from "../services/StudentDataService";
export default {
  name: "student-event-signup",
  data() {
    return {
      props: [],
      songs: [],
      dialog: false,
      studentId: "0",
      student: {},
    };
  },
  methods: {
    async retrieveStudentData() {
      await StudentDataService.get(parseInt(this.studentId))
        .then((response) => {
          this.student = response.data;
          console.log(this.student);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  // mounted() {},
};
</script>
