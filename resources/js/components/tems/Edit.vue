<template>
  
<div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                        Edit Team
                        <router-link :to="{name: 'TeamsIndex'}" class="float-right">Back</router-link>
                </div>

                <div class="card-body">
                    <form @submit.prevent="updateTeam">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Team Name</label>

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
                            <label for="user" class="col-md-4 col-form-label text-md-right">Team Lead</label>

                            <div class="col-md-6">

                                <select v-model="form.team_lead" name="user" class="form-control" aria-label="Default select example">
                                    <option  v-for="user in users" :key="user.id" :value="user.id">
                                        {{ user.name }}
                                    </option>
                                        
                                 </select>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <!-- <router-link :to="{name: 'EmployeesIndex'}"> -->
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
                users: [],
                form : {
                    name : '',
                    user_id : '',
                    team_lead : '',
                }
            }
        },

        created () {
            this.getUsers();
            this.updateTeam();
            this.getTeams();
        },

        methods: {
            getUsers() {
                axios.get("/api/teams/users")
            .then(res => {
                this.users = res.data;
            })
            
            .catch(error => {
                console.log(console.error)
            });

            },

            getTeams()
            {
                axios.get("/api/teams/" + this.$route.params.id)
                .then(res => {
                this.form = res.data.data;
            })
            
            .catch(error => {
                console.log(console.error)
            });
            },

            updateTeam() {
                axios.put("/api/teams" + this.$route.params.id, {
                    'name' : this.form.name,
                    'user_id' : this.form.user_id,
                    'team_lead' : this.form.team_lead,
                }).then(res => {
                    console.log(res);
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>