<template>
  <v-container>
    <v-row
      justify="center"
      content="center">
      <v-col
        cols="12"
        md="8">
        <v-card>
          <v-card-title>
            <h2>Create new thread</h2>
          </v-card-title>
          <v-card-text>
            <v-form>

              <v-text-field
                  label="Email"
                  name="email"
                  prepend-icon="mdi-email"
                  type="email"
                  v-model="email"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
            ripple
            color="pink"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateThread"
}
</script>

<style scoped>

</style>