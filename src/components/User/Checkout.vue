<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-xs-center=pt-5" v-if="loading">
                <v-progress-circular
                        indeterminate
                        color="primary"
                ></v-progress-circular>
            </v-flex>
            <v-flex xs12 sm6 offset- v-else-if="!loading && orders.length !== 0">
                <h3 class="text--secondary mb-3">Orders</h3>
                <v-list
                        subheader
                        two-line
                        flat
                >

                    <v-list-item-group
                            multiple
                            v-for="(order,i) in orders"
                            :key="i"
                    >
                        <v-list-item>
                            <template>
                                <v-list-item-action>
                                    <v-checkbox
                                            :input-value="order.done"
                                            color="primary"
                                            @change="markDone(order)"
                                    ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>

                                    <v-btn :to="'/product/' + order.productId" class="primary">Open</v-btn>

                            </template>
                        </v-list-item>


                    </v-list-item-group>
                </v-list>
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-else>
                <h1 class="text--secondary">You have no orders</h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Checkout",

        computed: {
            loading (){
                return this.$store.getters.loading
            },
            orders(){
                return this.$store.getters.orders
            }
        },
        methods: {
            markDone(order){
                order.done = true
            },
            created() {
                this.$store.dispatch('fetchOrders')
        }
        },

    }
</script>

<style scoped>

</style>