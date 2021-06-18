<template>
  <v-container>
    <v-row
      justify="center"
      content="center"
      v-show="!isLoading"
    >
    <v-col
      cols="12"
      md="6"

      v-for="(user , index) in users" :key="index"
    >
    <v-card>
      <v-card-title>
        <strong>{{user.name}}</strong>
      </v-card-title>
    </v-card>
    </v-col>
    </v-row>
    <v-row
        justify="center"
        content="center"
        v-show="isLoading"
    >
      <v-col
          cols="12"
          md="12">
        <div class="text-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
            ></v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


  import {getLeaderboardsRequest} from "../requests/User";

  export default {
    name: 'Home',
    data : () => ({
      users:[] ,
      isLoading : true,
    }),
    mounted() {
     getLeaderboardsRequest().then(res=>{
       this.users = res.data
     })
    }
  }
</script>
