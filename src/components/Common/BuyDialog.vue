<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog width="400px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn
                    slot="activator"
                    v-on="on"
            >Buy</v-btn>
        </template>
        <v-card>
            <v-container>
                <v-layout >
                    <v-flex xs12>
                        <v-card-title>
                            <h3>Do you want to buy it?</h3>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    label="Name"
                                    name="name"
                                    type="text"
                                    v-model="name"
                            ></v-text-field>
                            <v-text-field
                                    label="Phone"
                                    name="phone"
                                    type="number"
                                    v-model="phone"
                            ></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="light-blue darken-4" outlined @click="onCancel" :disabled="localLoading">Close</v-btn>
                            <v-btn dark color="light-blue darken-4" @click="onSave" :disabled="localLoading" :loading="localLoading">Buy It</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: ['product'],
        name: "BuyDialog",
        data (){
            return {
                dialog: false,
                name: '',
                phone: '',
                localLoading: false
            }
        },
        methods: {
            onCancel() {
                this.name = ''
                this.phone = ''
                this.dialog = false
            },
            onSave (){
                if(this.name !== '' && this.phone !== ''){
                    this.localLoading = false
                    this.$store.dispatch('createOrder', {
                        name: this.name,
                        phone: this.phone,
                        productId: this.product.id,
                        ownerId: this.product.ownerId
                    })
                        .finally(() => {
                            this.name = ''
                            this.phone = ''
                            this.localLoading = false
                            this.dialog = false
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>