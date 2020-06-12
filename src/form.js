import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators: {
      'caracteres': function(value) {
        return value.length >= 10 && value.length <= 50
      },
    }
  }

 Vue.use(VueForm, options)
  
  