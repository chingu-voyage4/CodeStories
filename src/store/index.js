import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import singleStory from '../views/SingleStory/singleStory.module';
import story from '../views/AddEditStory/addEditStory.module';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {
      message: 'Codestories',
      user: null
    },
    modules: {
      singleStory,
      story
    },
    actions,
    mutations,
    getters
  });
}
