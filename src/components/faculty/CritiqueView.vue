<template>
  <v-select
    v-model="searchByIndex"
    label="Search by"
    :items="searchByList"
  ></v-select>

  <v-divider></v-divider>

  <v-container v-if="searchByIndex == 'Event Date'">test 1</v-container>
  <v-container v-else-if="searchByIndex == 'Student Name'">test 2</v-container>
</template>
<script>
export default {
  name: "facultyCritiqueView",
  data: () => ({
    searchByIndex: null,
    searchByList: ["Event Date", "Student Name"],
  }),
  methods: {
    async retrieveAllSemesters() {},
    async retrieveEventsBySemester(semester) {},
  },
};
</script>
