import { MutationTree } from 'vuex'
import { State} from './state'

export enum MutationType {
  SetDisc = 'SET_DISC',
}
export type Mutations = {
  [MutationType.SetDisc](state: State, disc: any): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetDisc](state, disc) {
    state.disc = disc
  },
}
