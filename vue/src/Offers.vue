<template>
  <div id="offers">
    <h1>{{ msg }}</h1>
    <input class="newProduct"
           @keyup.enter="addProduct"
           v-model=newProduct>
    <ul>
      <li v-for="product in products"
          @dblclick="editProduct(product)"
          :class="{ editing: product == currentlyEdited }">
        <span>{{product.name}}</span>
        <input v-model="product.name"
          @blur="doneEdit"
          v-product-focus="product == currentlyEdited"
          @keyup.enter="doneEdit">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'offers',
  data () {
    return {
      products: [],
      newProduct:'',
      currentlyEdited: null,
      msg: 'Création d\'offres'
    }
  },
  created() {
    this.products = this.fetch()
  },
  watch: {
    products: {
      handler: function() {this.save()},
      deep: true
    }
  },
  methods: {
    addProduct: function() {
      this.products.push({name:this.newProduct})
      this.newProduct = ''
    },
    editProduct: function(product) {
      this.currentlyEdited = product
    },
    doneEdit: function() {
      console.log("done edit")
      this.currentlyEdited = null
    },
    save: function() {
      localStorage.setItem("products", JSON.stringify(this.products))
    },
    fetch: function() {
      var prods = localStorage.getItem("products")
      if (prods === null) { prods = [] }
      else { prods = JSON.parse(prods) }
      return prods
    }
  },
  directives: {
    'product-focus': function(element, binding) {
      if (binding) {
        element.focus();
      }
    }
  }
}
</script>

<style>
#offers {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

li.editing span {
  display:none;
}

li input {
  display: none;
}

li.editing input {
  display:inline;
}

a {
  color: #42b983;
}
</style>
