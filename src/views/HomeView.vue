<template>
    <v-container fluid class="fill-height">
        <v-row class="fill-height">
            <v-col cols="2" class="bg-blue">
                <MainNav></MainNav>
            </v-col>
            <v-col cols="10" class="bg-red">
                <StudentHome></StudentHome>
                <TestEx></TestEx>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import MainNav from "../components/MainNav.vue";
import StudentHome from "../components/StudentHome.vue";
import TestEx from "../components/TestEx.vue";
export default {
    name: 'HomeView',
    components: {
        MainNav,
        // StudentHome,
        TestEx
    },
    data: () => ({

    }),
}
</script>
  
<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
</style>