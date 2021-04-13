// store/getters.ts
import { GetterTree } from 'vuex'
import { State } from './state'
export type Getters = {
  getDisc(state: State): object;
}
export const getters: GetterTree<State, State> & Getters = { 
  getDisc(state) {
    return state.disc;
  }
}