Vue.createApp({
  data() {
    return {
      products:[
        {name:"jopa",price:'5jop'},
        {name:"jopa2234",price:'5jop234'},
        {name:"jopa2342",price:'5jop234243'}
      ]
    }
  }
}).mount('.new_season__products')
console.log([].fill({name:"jopa",price:`${Math.random()}`},0,20));

Vue.createApp({
  data() {
    return {
        products:Array(8).fill({name:"jopa",price:`${Math.random()}`}) 
    }
  }
}).mount('.section__new_products')