<template>

  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2 style ="color:rgb(139 13 135)">Login</h2>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="user">user</label>
          <input 
            type="text" 
            id="user" 
            name="user"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.user"
            required            
          >
          <field-messages name="user" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Usuario requerido</div>
          </field-messages>
        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="password">Password</label>
          <input 
            type="text" 
            id="password" 
            name="password"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.password"
            required 
          >

          <field-messages name="password" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Password requerido</div>
          </field-messages>
        </validate>

        <br>

        <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Login</button>

      </vue-form>

    </div>
  </section>

</template>

<script lang="js">



  export default  {
    name: 'src-components-formulario',
    components : {
    },
    props: [],
    
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
 
      }
    },
    methods: {

        getInitialData() {
        return{
          user: '',
          password: '',
        }
        },
        enviar(){
            if(this.formData.user == 'root' && this.formData.password == '123'){
                this.$router.push({
                    path: '/Tareas'
                })
            }
            else{
                this.formState._reset()
        }
        },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
    color: black;
  }

  hr {
    background-color: white;
  }
</style>
