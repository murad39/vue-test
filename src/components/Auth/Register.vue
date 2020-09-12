<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="6"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Register</v-toolbar-title>
                        <v-spacer></v-spacer>

                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    mdi-icon="person"
                                    type="email"
                                    :rules="emailRules"
                                    v-model="email"
                            ></v-text-field>

                            <v-text-field
                                    label="Password"
                                    name="password"
                                    mdi-icon="lock"
                                    type="password"
                                    :counter="12"
                                    :rules="passwordRules"
                                    v-model="password"
                            ></v-text-field>
                            <v-text-field
                                    label="ConfirmPassword"
                                    name="confirmPassword"
                                    mdi-icon="lock"
                                    type="password"
                                    :counter="12"
                                    :rules="confirmPasswordRules"
                                    v-model="confirmPassword"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading" :disabled="!valid || loading" @click="onSubmit" color="primary">Create Account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Register",
        data (){
            return{
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be more than 6 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password || 'Password should match'
                ]
            }
        },
        methods: {
            onSubmit(){
                if(this.$refs.form.validate()){
                    const user = {
                        email: this.email,
                        password: this.password,
                    }
                    this.$store.dispatch('registerUser', user)
                        .then(() => {
                            this.$router.push('/')
                        })
                        .catch(() => {})
                }
            }
        },
        computed: {
            loading (){
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>