<template>

  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2 style ="color:rgb(139 13 135)">Tareas</h2>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="descripcion">Descripcion</label>
          <input 
            type="text" 
            id="descripcion" 
            name="descripcion"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.descripcion"
            required            
            caracteres
          >

          <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Descripcion requerido</div>
            <div slot="caracteres" class="alert alert-danger my-1">La descripcion debe tener entre 10 y 50 caracteres</div>
          </field-messages>
        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        <validate tag ="div">
          <label for ="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre"
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre"
            required 
            no-espacios
          >

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Nombre requerido</div>
            <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios</div>
          </field-messages>
        </validate>
        <!-- ------------------------------------------------ -->
        <br>
        
        <validate tag ="div">
          <label for ="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            class="form-control" 
            autocomplete="off"
            v-model="formData.email"
            required     
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          >

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Email requerido</div>
            <div slot="pattern" class="alert alert-danger my-1">Email invalido</div>
          </field-messages>


        </validate>
        <!-- ------------------------------------------------ -->

        <br>

        <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>

        &nbsp;

        <button class="btn btn-danger my-4" type="submit" @click="salir()">Logout</button>

      </vue-form>

      <Tabla></Tabla>

    </div>
  </section>

</template>

<script lang="js">

    import Tabla from './Tabla.vue'
    import { urlTareas } from '../urls'

  export default  {
    name: 'src-components-formulario',
    components : {
      Tabla
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
          descripcion: '',
          nombre: '',
          email: '',
        }
      },
      enviar(){
        this.postAxios()
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      postAxios() {
        this.axios.post(urlTareas, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
        })
      },
      salir(){
          this.$router.push({
            path: '/Login'
          })
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
