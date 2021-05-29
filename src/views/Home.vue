<template>
  <v-container>
    <v-row
      justify="center"
      content="center"
    >
    <v-col
      cols="12"
      md="6"
    >
    <v-card>
      <v-card-title>
          <router-link to="/thread/laravel-error" class="text-decoration-none light-green--text"><h2>Laravel title</h2></router-link>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <p>مهندس احمدیان</p>
          </v-col>
          <v-col>
            <p class="text-right">2021/05/28 14:27</p>
          </v-col>
        </v-row>
        <p>
          Lorem
        </p>
      </v-card-text>
    </v-card>
    </v-col>
    <v-col
          cols="12"
          md="6"
      >
        <v-card>
          <v-card-title>
            <a class="text-decoration-none light-green--text" href="#">
              Laravel title
            </a>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <p>مهندس احمدیان</p>
              </v-col>
              <v-col>
                <p class="text-right">2021/05/28 14:27</p>
              </v-col>
            </v-row>
            <p>
              Lorem
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
  }
</script>
