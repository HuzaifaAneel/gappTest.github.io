<template>
  
<div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                        Create Department
                        <router-link :to="{name: 'DepartmentsIndex'}" class="float-right">Back</router-link>
                </div>

                <div class="card-body">
                    <form @submit.prevent="storeDepartment">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Department Name</label>

                            <div class="col-md-6">
                                <input id="name" v-model="form.name" type="text" class="form-control"  required>
                            </div>
                        </div>

                         <div class="form-group row">
                            <label for="user" class="col-md-4 col-form-label text-md-right">People</label>

                            <div class="col-md-6">

                                <select v-model="form.user_id" name="user" class="form-control" aria-label="Default select example">
                                    <option v-for="user in users" :key="user.id" :value="user.id">
                                        {{ user.name }}
                                    </option>
                                        
                                 </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="team" class="col-md-4 col-form-label text-md-right">Team</label>

                            <div class="col-md-6">

                                <select v-model="form.team_id" name="team" class="form-control" aria-label="Default select example">
                                    <option  v-for="team in teams" :key="team.id" :value="team.id">
                                        {{ team.name }}
                                    </option>
                                        
                                 </select>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                               
                                    <button type="submit" class="btn btn-primary">Save</button>
                                
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
                users: [],
                teams: [],
                form : {
                    name : '',
                    user_id : '',
                    team_id : '',
                }
            }
        },

        created () {
            this.getUsers();
            this.getTeams();
        },

        methods: {
            getUsers() {
                axios.get("/api/departments/users")
            .then(res => {
                this.users = res.data;
            })
            
            .catch(error => {
                console.log(console.error)
            });

            },

            getTeams() {
                axios.get("/api/departments/teams")
            .then(res => {
                this.users = res.data;
            })
            
            .catch(error => {
                console.log(console.error)
            });

            },

            storeDepartment() {
                axios.post("/api/departments", {
                    'name' : this.form.name,
                    'user_id' : this.form.user_id,
                    'team_id' : this.form.team_id,
                }).then(res => {
                    console.log(res);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>