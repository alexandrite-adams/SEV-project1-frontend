<template>
    <v-container fluid class='fill-height bg-primary' >
        <v-list class='fill-height bg-primary'
          :items="items"
        ></v-list>
    </v-container>
</template>
  
<script>
export default {
    name: 'MainNav',
    components: {
    },
    data: () => ({
        items: [
        {
          title: 'Student',
          value: 'student',
        },
        {
          title: 'Faculty',
          value: 'faculty',
        },
        {
          title: 'Accompanist',
          value: 'accompanist',
        },
        {
          title: 'Admin',
          value: 'admin',
        },
      ],
    }),
}
</script>
  
<style scoped>
    
</style>