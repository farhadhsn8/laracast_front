<template>
  <v-container>
    <v-row
    justify="center"
    content="center"
    >
     <v-col
       cols="12"
       md="8"
       >
       <v-card
       outlined
       >
         <v-card-title>
           <h2>{{thread.title}}</h2>
         </v-card-title>
         <v-card-text>
           <v-row>
             <v-col>
               <p>{{ thread.user.name }}</p>
             </v-col>
             <v-col>
               <p class="text-right">{{ thread.created_at }}</p>
             </v-col>
           </v-row>
           <vue-markdown v-html="thread.content">

           </vue-markdown>
         </v-card-text>
       </v-card>
     </v-col>
     <v-col
         cols="12"
         md="8"
     >
        <v-row>
          <v-col>
            <h2>Replies:</h2>
          </v-col>
          <v-col
          class="text-right">
            <v-btn
            ripple
            to="#"
            color="#B96"
            >
              Reply
            </v-btn>
          </v-col>
        </v-row>
     </v-col>
      <v-row
          justify="center"
          content="center"
      >
        <v-col
            cols="12"
            md="8"
        >
          <v-card
              outlined
              dark
          >
            <v-card-title>
              <v-avatar
                color="orange"
                size="62"
                >
                FH
              </v-avatar>
              <v-row>
                <v-col>
                  <h4 class="ml-6">seyed farhad hosseini</h4>
                </v-col>
                <v-col>
                  <small class="grey--text" style="font-size: 11pt">29/5/2021 15:21</small>
                </v-col>
              </v-row>


            </v-card-title>
            <v-card-text>
              <vue-markdown>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae delectus, dicta dignissimos dolore doloribus earum enim eos, ipsum iste libero molestiae nisi non quae quaerat quas quasi repellat reprehenderit!
              </vue-markdown>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row
          justify="center"
          content="center"
      >
        <v-col
            cols="12"
            md="8"
        >
          <v-card
              outlined
              dark
          >
            <v-card-title>
              <v-avatar
                  color="orange"
                  size="62"
              >
                FH
              </v-avatar>
              <v-row>
                <v-col>
                  <h4 class="ml-6">seyed farhad hosseini</h4>
                </v-col>
                <v-col>
                  <small class="grey--text" style="font-size: 11pt">29/5/2021 15:21</small>
                </v-col>
              </v-row>


            </v-card-title>
            <v-card-text>
              <p>
                Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores assumenda deserunt error impedit maiores maxime nulla quam quibusdam repudiandae sed tempore unde, vel voluptates? Error harum magni soluta! sit amet, consectetur adipisicing elit. Consectetur consequatur dolor facere fugit magni, minus mollitia quaerat quia quisquam vero. Architecto corporis distinctio iste quaerat voluptatem? Eaque ipsa iusto sed?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi autem consequatur consequuntur cum dolorum ducimus eaque eveniet illum in optio perferendis perspiciatis placeat provident, quae quidem quod rem!
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from  'vue-markdown/src/VueMarkdown'
import {getSingleThreadRequest} from "../../requests/Threads";
export default {
  name: "SingleThread",
  components:{
    VueMarkdown
  },
  data:()=>({
    thread:{
      id:null,
      title:null,
      slug:null,
      content:null,
      best_answer_id:null,
      created_at:null,
      channel:{
        id:null,
        name:null
      },
      user:{
        id:null,
        name:null
      }

    }
  }),
  methods:{
    fethThread(){
      getSingleThreadRequest(this.$route.params.slug).then(res=>{
        this.thread=res.data
      })
    }
  },
  mounted() {
    this.fethThread()
  }
}
</script>

<style scoped>

</style>