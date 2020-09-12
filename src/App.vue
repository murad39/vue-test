<template>
  <v-app>
    <navbar/>
       <template v-if="error">
        <v-snackbar
         :multi-line="true"
         :timeout="5000"
         :color="error"
         @input="closeError"
         :value="true"
        >
          {{ error }}
          <v-btn
                  color="pink"
                  text
                  @click.native="closeError"
          >
            Close
          </v-btn>
        </v-snackbar>
       </template>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',

  components: {
    Navbar
  },
  methods: {
      closeError (){
          this.$store.dispatch('clearError')
      }
  },
  computed: {
      error(){
        return this.$store.getters.error
      }
  },
  data: () => ({
    //
  }),
};
</script>
