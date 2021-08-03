<template>
    <div>
        <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Departments</h1>
    </div>

    <div class="row">
        <div class="card mx-auto">
            <div v-if="showMessage">
                    <div class="alert alert-success">{{message}}</div>
            </div>
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
                            <router-link :to="{name: 'DepartmentsCreate'}" class="btn btn-primary mb-2">Create</router-link>
                        </div>
                </div>
            </div>

            <div class="card-body text-black-500">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Department Name</th>
                        <th scope="col">Users</th>
                        <th scope="col">Teams</th> 
                        <th scope="col">Manage</th> 
                    </tr>
                    </thead>
                    <tbody>
                            <tr v-for="department in departments" :key="department.id">   
                                <th scope="row">#{{department.id}}</th>
                                <td>{{department.name}}</td>
                                <td>{{department.user_id}}</td>
                                <td>{{department.team_id}}</td>

                                <!-- <td>{{team.team_lead}}</td> -->
                                <td>
                                    <router-link :to="{name: 'DepartmentsEdit', params: {id:department.id}}">
                                        <button class=" btn btn-success">Edit</button>
                                    </router-link>

                                    <button class="btn btn-danger" @click="deleteDepartment(department.id)">Delete</button>
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
                departments: [],
                showMessage: false,
                message: ''
            }
        },

        created () {
           this.getDepartments() ;
        },

        methods: {
            getDepartments() {
                axios.get('/api/departments')
                .then(res => {
                this.teams = res.data.data
                }).catch(error => {
                console.log(error);
                });
            },

             deleteDepartment(id) {
                 axios.delete('api/departments/' +id).then(response=> {
                    this.showMessage = true;
                    this.message = response.data;
                    this.getDepartments();
         });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>