<template>
  <div>
    <h2>Event Sign-Up</h2>
    <v-container>
      <v-row>
        <v-col>
          <h3>{{ eventOb }}</h3>
          <!-- We need to add Event names to the database -->
        </v-col>
        <v-col>
          <h3>{{ eventOb.date }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h4>Instructor</h4>
          <h5>{{ student.instructor }}</h5>
        </v-col>
        <v-col>
          <h4>Student Instrument</h4>
          <h5>{{ student.instrument }}</h5>
        </v-col>
      </v-row>
    </v-container>
    <h3>Songs</h3>
    <v-card v-for="song in songs" :key="song.id">
      <v-container>
        <v-row>
          <v-col>
            <v-card>{{ song.composer }}</v-card>
          </v-col>
          <v-col>
            <v-card>{{ song.title }}</v-card>
          </v-col>
          <v-col>
            <!-- <v-checkbox
              label="translation required"
              :value="requiresTranslation(song.id)"
            ></v-checkbox> -->
          </v-col>
        </v-row>
      </v-container>
      <!-- figure out how to v-model each song's translation checkbox -->

      <!-- <input v-model="translation.text" /> -->
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
  props: {
    eventOb: Object,
  },
  data() {
    return {
      songs: [
        { title: "song1", composer: "mossypaint", id: 2 },
        { title: "song2", composer: "troubleshoot", id: 3 },
      ],
      dialog: false,
      studentId: "0",
      student: { instructor: "Tim", instrument: "Voice" },
    };
  },
  created() {},
  methods: {
    async requiresTranslation(songId) {
      await SongTranslationsDataService.getBySongId(parseInt(songId))
        .then((response) => {
          if (response.data != []) {
            return "true";
          } else {
            return "false";
          }
          // this.student = response.data;
          // console.log(this.student);
        })
        .catch((e) => {
          console.log(e);
        });
    },
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
