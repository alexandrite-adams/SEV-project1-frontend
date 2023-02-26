<template>
  <v-container fluid class="fill-height bg-primary">
    <v-list class="fill-height bg-primary" :items="items"></v-list>
  </v-container>
</template>

<select
  name="LeaveType"
  @change="onChange($event)"
  class="form-control"
  v-model="key"
>
   <option value="1"> Jury </option>
   <option value="2"> Review </option>

</select>

<script>
var vm = new Vue({
    data: {
        key: ""
    },
    methods: {
        onChange(event) {
            console.log(event.target.value)
        }
    }
</script>
