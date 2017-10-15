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
  methods: {
    addProduct: function() {
      this.products.push({name:this.newProduct})
      this.newProduct = ''
    },
    editProduct: function(product) {
      this.currentlyEdited = product
    },
    doneEdit: function() {
      this.currentlyEdited = null
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
