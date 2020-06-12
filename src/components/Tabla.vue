<template>
<div>
    <div v-if="datos.length"> 
        <section class="src-components-http">
            <div class="jumbotron mt-3">
            <h2>Tareas</h2>
            <hr>
            <div> 
                <table class="table">
                    <tr class="bg-success text-white">
                        <th>DESCRIPCION</th>
                        <th>NOMBRE</th>
                        <th>EMAIL</th>
                        <th>CREADA</th>
                    </tr>
                    <tr class="bg-info text-white" v-for="(dato,index) in datos" :key="index">
                        <td> {{dato.descripcion}} </td>
                        <td> {{dato.nombre}} </td>
                        <td> {{dato.email}} </td>
                        <td> {{dato.createdAt | formatoFecha}}</td>
                    </tr>
                </table>         
            </div>
            

            </div>
        </section>
    </div>
    <div class="alert alert-danger" v-else-if="!datos.length && datos!=-1" >
                No se encontraron tareas
    </div>
    <p>
        respuestas: 1-d, 2-c, 3-c, 4-b, 5-a, 6-b, 7-d, 8-c, 9-d, 10-b
    </p>
</div>
</template>

<script lang="js">

import { urlTareas } from '../urls'

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
      this.getAxios()
    },
    updated () {
      this.getAxios()
    },
    data () {
      return {
        datos: -1
      }
    },
    methods: {
      getAxios() {
        this.axios.get(urlTareas)
        .then( res => {
            this.datos=res.data
          })
      },
      
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-components-http {
  }

  hr {
    background-color: white;
  }
</style>