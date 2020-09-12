<template>
    <v-container>
        <v-layout row v-if="myProducts.length >= 1">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My Products</h1>
                <v-card class="elevation-10 mb-3"
                v-for="(product,i) in myProducts"
                :key="i"
                >
                    <v-layout>
                        <v-flex xs4>
                           <v-img :src="product.imageSrc"  height="250px">

                           </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{product.title}}</h2>
                                <p>{{product.description}}</p>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn :to="'/product/' + product.id" class="info">Open</v-btn>
                                </v-card-actions>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
       <!-- <v-layout>
            <v-flex xs12 class="text-xs-center"  v-if-else="myProducts.length === 0">
                <h1 class="text--primary">Yoy have no products</h1>
            </v-flex>
        </v-layout> -->
    </v-container>
</template>

<script>
    export default {
        name: "ProductList",
        computed: {
            myProducts (){
                return this.$store.getters.myProducts
            }
        }
    }
</script>

<style scoped>

</style>