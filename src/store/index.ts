import { createStore } from "vuex";
import user from './user'
import about from './about'
export default createStore({
 modules:{
   user,
   about
 }
});
