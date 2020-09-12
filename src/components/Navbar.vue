<template>
    <div>
        <v-navigation-drawer app temporary v-model="sideNav">
            <v-list>
                <v-list-item v-for="(link, i) in links"
                :key ="i"
                :to = "link.url">
                    <v-list-item-icon>
                        <v-icon color="pink">{{link.icon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer >
        <v-toolbar app color="blue">
            <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" class="pointer">Online store</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items color="blue" class="hidden-sm-and-down">
                <v-btn v-for="(link, i) in links"
                :key="i"
                :to="link.url">
                   <v-icon left>{{link.icon}}</v-icon>
                    {{link.title}}
                </v-btn>
                <v-btn
                v-if="isUserLoggedIn"
                @click="onLogout"
                >
                    <v-icon left>md-exit_to_app</v-icon>
                    Logout
                </v-btn>

            </v-toolbar-items>
        </v-toolbar>

        <!-- Sizes your content based upon application components -->
        <v-content>

        <router-view></router-view>

        </v-content>
    </div>
</template>

<script>
    export default {
        data (){
           return {
               sideNav : false,
           }
        },
        name: "Navbar",
        computed: {
            isUserLoggedIn (){
                return this.$store.getters.isUserLoggedIn
            },
            links (){
                if (this.isUserLoggedIn){
                    return [
                        {title: 'Cart', icon: 'mdi-store', url: '/checkout'},
                        {title: 'New Product', icon: 'mdi-forward', url: '/new'},
                        {title: 'My Products', icon: 'mdi-sort', url: '/list'}
                    ]
                }
                return [
                    {title: 'Login', icon: 'mdi-account-box', url: '/login'},
                    {title: 'Register', icon: 'mdi-face', url: '/register'},
                ]
            }
        },
        methods: {
            onLogout () {
                this.$store.dispatch('logoutUser')
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .pointer{
        cursor: pointer;
    }
</style>