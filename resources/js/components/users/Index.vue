<template>
<div>
        <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
    </div>

    <div class="row">
        <div class="card mx-auto">
            <!-- <div v-if="showMessage">
                    <div class="alert alert-success">{{message}}</div>
            </div> -->
            <div class="card-header">
                <div class="row">
                    <div class="col">
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col">
                                    <input type="search" name="search" class="form-control mb-2" id="inlineFormInput" placeholder="Search Country Here">
                                </div>
                                <div class="col">
                                    <button type="submit" class="btn btn-primary mb-2">Search</button>  
                                </div>
                            </div>
                        </form>
                    </div>
                        <div>
                            <router-link :to="{name: 'UsersCreate'}" class="btn btn-primary mb-2">Create</router-link>
                        </div>
                </div>
            </div>

            <div class="card-body text-black-500">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Manage</th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr v-for="user in users" :key="user.id">   
                                <th scope="row">#{{user.id}}</th>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>
                                    <router-link :to="{name: 'UsersEdit', params: {id:user.id}}">
                                        <button class=" btn btn-success">Edit</button>
                                    </router-link>

                                    <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                users: []
            }
        },

        created () {
            this.getUsers();
        },

        methods: {
            getUsers() {
                axios.get('/api/users')
                .then(res => {
                this.users = res.data.data
                }).catch(error => {
                console.log(error);
                })
            },

             deleteUser(id) {
                 axios.delete('api/users/' +id).then(response=> {
                  console.log(response);
         });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>