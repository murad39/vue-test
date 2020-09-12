<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3"> Create New Product</h1>
                <v-form ref="form" v-model="valid" lazy-validation mb-3>
                    <v-text-field
                            label="Title"
                            name="title"
                            type="text"
                            required
                            :rules="[v => !!v || 'Title is require']"
                            v-model="title"
                    ></v-text-field>

                    <v-text-field
                            label="Vendor Product"
                            name="vendor"
                            type="text"
                            v-model="vendor"
                    ></v-text-field>
                    <v-text-field
                            label="Color Product"
                            name="color"
                            type="text"
                            v-model="color"
                    ></v-text-field>
                    <v-text-field
                            label="Material Product"
                            name="material"
                            type="text"
                            v-model="material"
                    ></v-text-field>
                    <v-text-field
                            label="Price Product"
                            name="price"
                            type="text"
                            required
                            :rules="[v => !!v || 'Title is require']"
                            v-model="price"
                    ></v-text-field>
                    <v-text-field
                            label="Description Product"
                            name="description"
                            type="text"
                            v-model="description"
                    ></v-text-field>
                </v-form>
                <v-layout>
                    <v-flex xs12 mb-3>
                        <v-btn @click="upload" class="warning">
                            Upload
                        </v-btn>
                        <input @change="onFileChange" ref="fileInput" type="file" style="display: none" accept="image/*"  />
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 row>
                        <img :src="imageSrc" alt="" height="200px" v-if="imageSrc"/>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 row>
                        <v-switch
                                v-model="promo"
                                label="Add to Promo?"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12 row>
                        <v-spacer></v-spacer>
                        <v-btn :loading="loading" :disabled="!valid || !image || loading" class="success" @click="createProduct">Create Product</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NewProduct",
        data (){
            return{
                title: '',
                vendor: '',
                color: '',
                material: '',
                price: 0,
                description: '',
                promo: false,
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        computed: {
          loading() {
              return this.$store.getters.loading
          }
        },
        methods: {
            createProduct(){
                if(this.$refs.form.validate() && this.imageSrc){
                    const product = {
                        title: this.title,
                        vendor: this.vendor,
                        color: this.color,
                        material: this.material,
                        price: this.price,
                        description: this.description,
                        promo: this.promo,
                        valid: this.valid,
                        image: this.image
                    };
                    this.$store.dispatch('createProduct', product)
                        .then(() => {
                            this.$router.push('/list')
                        })
                        .catch(() => {})

                }
            },
            upload(){
                this.$refs.fileInput.click()
            },
            onFileChange(event){
                const file = event.target.files[0]
                const reader = new FileReader()
                reader.onload = e => {
                    this.imageSrc = reader.result
                    console.log(e)
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        }
    }
</script>

<style scoped>

</style>