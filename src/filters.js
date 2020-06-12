import Vue from 'vue'


Vue.filter('formatoFecha', function(value) {
    //substring

    var anio = value.substring(0,4)
    var mes = value.substring(5,7)
    var dia = value.substring(8,10)
    var hora = value.substring(11,19)
    return dia + "/" + mes + "/" + anio + " " + hora 
})