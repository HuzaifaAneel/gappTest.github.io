<template>
<div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                        Edit User
                        <router-link :to="{name: 'UsersIndex'}" class="float-right">Back</router-link>
                </div>

                <div class="card-body">
                    <form @submit.prevent="updateUser">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" v-model="form.name" type="text" class="form-control"  required>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input id="email" v-model="form.email" type="email" class="form-control" required>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input  id="password" v-model="form.password" type="password" class="form-control" required>
                            </div>
                        </div>


                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <!-- <router-link :to="{name: 'UsersIndex'}"> -->
                                    <button type="submit" class="btn btn-primary">Update</button>
                                <!-- </router-link> -->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
 
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        },

        created () {
            
            this.getUsers();
            this.updateUser();
        },

        methods: {

            getUsers()
            {
                axios.get("/api/users/" + this.$route.params.id)
                .then(res => {
                this.form = res.data.data;
            })
            
            .catch(error => {
                console.log(console.error)
            });
            },

            updateUser()
        {
            axios.put("/api/users/" + this.$route.params.id, {

                'name': this.form.name,
                'email': this.form.email,
                'password': this.form.password
            })
            .then(res => {
                    console.log(res);
                });
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>