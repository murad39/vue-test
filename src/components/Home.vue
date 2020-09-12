<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel hide-delimiters>
                        <v-carousel-item
                         v-for="(product, i) in promoProducts"
                         :key = "i"
                         :src= "product.imageSrc"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout wrap>
                <v-flex xs12 sm6
                v-for="(product,i) in products"
                :key = "i"
                >

                    <v-card
                            class="mx-auto"
                            max-width="400"
                    >
                        <router-link
                                :to="'/product/' + product.id"
                        >
                            <v-img
                                    height="350px"
                                    :src="product.imageSrc"
                            >
                            </v-img>
                        </router-link>

                        <v-card-text class="text--primary">
                            <div class="card_describe">
                                <h3 class="card_heading heading">{{product.title}}</h3>
                                <p class="subheading">{{product.description}}</p>
                                <p class="subheading card_price"><span class="title">Price:</span>${{product.price}}</p>
                            </div>

                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="orange"
                                    text
                                    rounded
                                    :to="'/product/' + product.id"
                            >
                                Description
                            </v-btn>

                           <app-buy-dialog :product="product"></app-buy-dialog>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
    export default {
        name: "Home",
        computed: {
            promoProducts() {
                return this.$store.getters.promoProducts
            },
            products () {
                return this.$store.getters.products
            },
            loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>
    .card_heading{
        font-weight: bold;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .card_describe{
        margin-top: auto;
        padding-left: 1rem;
    }
    .card_price{
        color: red;
        font-size: 18px;
    }
</style>