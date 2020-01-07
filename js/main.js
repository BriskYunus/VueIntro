import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
  // instantiate a new Vue Instance
  let vue_vm = new Vue({
    data: {
        message: "Hello from Vue!",

        collection: [
          { name: "Brisk", role: "Walmart Student" },
          { name: "Phil", role: "Swag Student" },
          { name: "Scott", role: "Thrift Student" },
          { name: "Mike", role: "Gucci Student" }
        ]
    },

    methods: {
        logClicked() {
          console.log('clicked on an element!');
        }
    }
  }).$mount("#app");

})();