<template>
    <v-container fluid class="bg-white">
    <!-- <v-container fluid class="fill-height bg-white"> -->
        <v-form>
        
            <v-label for = "deportment"> <b>Deportment</b>(poise, entrance/exit, bow)</v-label><br>
            <input type="text" id="deportment" name="deportmentComment" value="">
                <input type="radio" id="poor_1" name="deportmentRating">
                <v-label for = "poor_1"> <b>Poor</b></v-label>
                <input type="radio" id="fair_1" name="deportmentRating">
                <v-label for = "fair_1"> <b>Fair</b></v-label>
                <input type="radio" id="good_1" name="deportmentRating">
                <v-label for = "good_1"> <b>Good</b></v-label>
                <input type="radio" id="excellent_1" name="deportmentRating">
                <v-label for = "excellent_1"> <b>Excellent</b></v-label>
            <br>

            <v-label for = "tone"> <b>Tone</b>(beauty, control/clarity, vibrato, warmth)</v-label><br>
            <input type="text" id="tone" name="toneComment" value="">
                <input type="radio" id="poor_2" name="toneRating">
                <v-label for = "poor_2"> <b>Poor</b></v-label>
                <input type="radio" id="fair_2" name="toneRating">
                <v-label for = "fair_2"> <b>Fair</b></v-label>
                <input type="radio" id="good_2" name="toneRating">
                <v-label for = "good_2"> <b>Good</b></v-label>
                <input type="radio" id="excellent_2" name="toneRating">
                <v-label for = "excellent_2"> <b>Excellent</b></v-label>
            <br>

            <v-label for = "accuracy_intonation"> <b>Accuracy/Intonation</b>(correct notes with correct rhythm, tuning with keyboard and/or ensemble)</v-label><br>
            <input type="text" id="accuracy_intonation" name="accuracy_intonationComment" value="">
                <input type="radio" id="poor_3" name="accuracy_intonationRating">
                <v-label for = "poor_3"> <b>Poor</b></v-label>
                <input type="radio" id="fair_3" name="accuracy_intonationRating">
                <v-label for = "fair_3"> <b>Fair</b></v-label>
                <input type="radio" id="good_3" name="accuracy_intonationRating">
                <v-label for = "good_3"> <b>Good</b></v-label>
                <input type="radio" id="excellent_3" name="accuracy_intonationRating">
                <v-label for = "excellent_3"> <b>Excellent</b></v-label>

            <br>
            
            <v-label for = "technique"> <b>Technique</b>(correct notes with correct rhythm, tuning with keyboard and/or ensemble)</v-label><br>
            <input type="text" id="technique" name="techniqueComment" value="">
                <input type="radio" id="poor_4" name="techniqueRating">
                <v-label for = "poor_4"> <b>Poor</b></v-label>
                <input type="radio" id="fair_4" name="techniqueRating">
                <v-label for = "fair_4"> <b>Fair</b></v-label>
                <input type="radio" id="good_4" name="techniqueRating">
                <v-label for = "good_4"> <b>Good</b></v-label>
                <input type="radio" id="excellent_4" name="techniqueRating">
                <v-label for = "excellent_4"> <b>Excellent</b></v-label>

            <br>
            
            <v-label for = "interpretation_musicianship"> <b>Interpretation, Musicianship</b>(phrasing, tempo, dynamics communication, rapport)</v-label><br>
            <input type="text" id="interpretation_musicianship" name="techniqueComment" value="">
                <input type="radio" id="poor_5" name="techniqueRating">
                <v-label for = "poor_5"> <b>Poor</b></v-label>
                <input type="radio" id="fair_5" name="techniqueRating">
                <v-label for = "fair_5"> <b>Fair</b></v-label>
                <input type="radio" id="good_5" name="techniqueRating">
                <v-label for = "good_5"> <b>Good</b></v-label>
                <input type="radio" id="excellent_5" name="techniqueRating">
                <v-label for = "excellent_5"> <b>Excellent</b></v-label>
            <br>

            <v-label for = "balance_blend"> <b>Balance Blend</b>(with accompanist or within ensemble)</v-label><br>
            <input type="text" id="balance_blend" name="balance_blendComment" value="">
                <input type="radio" id="poor_6" name="balance_blendRating">
                <v-label for = "poor_6"> <b>Poor</b></v-label>
                <input type="radio" id="fair_6" name="balance_blendRating">
                <v-label for = "fair_6"> <b>Fair</b></v-label>
                <input type="radio" id="good_6" name="balance_blendRating">
                <v-label for = "good_6"> <b>Good</b></v-label>
                <input type="radio" id="excellent_6" name="balance_blendRating">
                <v-label for = "excellent_6"> <b>Excellent</b></v-label>
            <br>

            <v-label for = "diction"> <b>Diction/Articulation (vocal/instrumental)</b>(vowels; constanants, legato, double/triple tongue)</v-label><br>
            <input type="text" id="diction" name="dictionComment" value="">
                <input type="radio" id="poor_7" name="dictionRating">
                <v-label for = "poor_7"> <b>Poor</b></v-label>
                <input type="radio" id="fair_7" name="dictionRating">
                <v-label for = "fair_7"> <b>Fair</b></v-label>
                <input type="radio" id="good_7" name="dictionRating">
                <v-label for = "good_7"> <b>Good</b></v-label>
                <input type="radio" id="excellent_7" name="dictionRating">
                <v-label for = "excellent_7"> <b>Excellent</b></v-label>
            <br>

            <v-label for = "performance"> <b>Performance and Suggestions</b>(overall readiness to perform)</v-label><br>
            <input type="text" id="technique" name="techniqueComment" value="">
            <br>
        </v-form>
    </v-container>
</template>
  
<script>
export default {
    name: 'CreateCritique',
    components: {

    },
    data: () => ({

    }),
}
</script>
  
<style scoped>

</style>