import { createStore } from "vuex";

const store = createStore({
  state:() => {
    return {
      name:"战三"
    }
  }
})

export {
  store
}
