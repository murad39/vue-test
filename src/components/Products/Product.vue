<template>
    <v-container>
        <section class="product mt-3 elevation-10" v-if="!loading">
            <v-layout row wrap>
                <v-flex xs12 lg6>
                    <img :src="product.imageSrc" class="product_image"/>
                </v-flex>
                <v-flex xs12 lg6>
                    <div class="product_info">
                        <h5 class="product_title display-1 mb-3 mt-3">{{product.title}}</h5>
                        <p class="product_category title">
                            <span class="product_title">Vendor :</span> {{product.vendor}}
                        </p>
                        <p class="product_price title">
                            <span class="product_title">Price:</span> $ {{product.price}}
                        </p>
                        <p class="product_color title">
                            <span class="product_title">Color:</span>
                            <span
                            :title="product.color"
                            :style="{backgroundColor: product.color}"
                            class="product_color_bg"
                            ></span>
                        </p>
                        <p class="title">
                            <span class="product_title"> Material:</span> {{product.material}}
                        </p>
                        <div class="title mb-5">
                            <p class="product_title mb-2">Description:</p>{{product.description}}
                        </div>
                        <app-edit-product :product="product" v-if="isOwner"></app-edit-product>
                        <app-buy-dialog :product="product"></app-buy-dialog>
                    </div>
                </v-flex>
            </v-layout>
        </section>
        <section v-else class="text-xs-center">
            <v-progress-circular
                    indeterminate
                    color="primary"
            ></v-progress-circular>
        </section>
    </v-container>
</template>

<script>
    import EditProduct from './EditProduct'
    import fb from 'firebase'
    export default {
        props: ['id'],
        computed: {
            product () {
                const id = this.id
                return this.$store.getters.productById(id)
            },
            loading () {
                return this.$store.getters.loading
            },
            isOwner () {
                    return this.product.ownerId === fb.auth().currentUser.uid
            }
        },

        components: {
            appEditProduct: EditProduct
        }
    }
</script>

<style scoped>
    .product{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border: 1px solid deepskyblue;
        padding: 38px;
        margin-bottom: 100px;
    }
    .product_image{
        height: 400px;
        width: 550px;
    }
    .product_info{
        margin-left: 50px;
    }
    .product_title{
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 0;
    }
    .product_price{
        color: red;
    }
    .product_color_bg{
        display: inline-block;
        width: 50px;
        height: 20px;
        border: 1px solid #2b2b2b;
        border-radius: 10px;
    }
    @media screen and (max-width: 1270px) {
        .product {
            text-align: center;
        }
        .product_info {
            margin-left: 0;
        }
    }
    @media screen and (max-width: 620px) {
        .product {
            text-align: start;
        }
        .product_image {
            width: 100%;
            height: 100%;
        }
        .product_title {
            text-align: center;
        }
    }
    @media screen and (max-width: 400px) {
        .product {
            padding: 10px;
            text-align: start;
            margin-bottom: 120px
        }
        .product_image {
            height: 250px;
            width: 100%;
        }
        .product_info {
            margin-left: 0;
        }
    }
</style>