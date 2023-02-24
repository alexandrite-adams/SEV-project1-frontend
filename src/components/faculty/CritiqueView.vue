<template>
  <!-- <v-radio-group inline label="Search by:">
        <v-radio @change="searchBy('event')" label="Event Date" value="1"></v-radio>
        <v-radio @change="searchBy('student')" label="Student Name" value="2"></v-radio>
    </v-radio-group> -->
  <v-select
    label="Search by"
    :items="searchByList"
    @update:modelValue="changeIndex()"
  ></v-select>

  <v-divider></v-divider>

  <v-container v-if="searchByIndex == 1">test 1</v-container>
  <v-container v-else-if="searchByIndex == 2">test 2</v-container>
</template>
<script>
export default {
  data: () => ({
    searchByIndex: null,
    searchByList: ["Event Date", "Student Name"],
  }),
  methods: {
    changeIndex() {
      this.searchByIndex = 2;
      console.log(this.searchByIndex);
    },
    searchBy(value) {
      searchByIndex = value;
      console.log("search by-" + value);
    },
  },
};
</script>
