import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	preloaderShow: false,
	results: '',
	count: '',
    items: [
			{
				url: '/galaxies',
				text: 'Галакики'
			},
			{
				url: '/sun',
				text: 'Солнце'
			},
			{
				url: '/mercury',
				text: 'Меркурий'
			},
			{
				url: '/venus',
				text: 'Венера'
			},
			{
				url: '/earth',
				text: 'Земля'
			},
			{
				url: '/mars',
				text: 'Марс'
			},
			{
				url: '/jupiter',
				text: 'Юпитер'
			},
			{
				url: '/saturn',
				text: 'Сатурн'
			},
			{
				url: '/uranus',
				text: 'Уран'
			},
			{
				url: '/neptune',
				text: 'Нептун'
			},
			{
				url: '/pluto',
				text: 'Плутон'
			}
		]
  },
  getters: {
	preloaderShow(state){
		return state.preloaderShow;
	},
	count(state){
		return state.count;
	},
    items(state){
			return state.items;
		},
	results(state){
			return state.results;
		}
  },
  mutations: {
	preloaderShow(state) {
		state.preloaderShow = false;
		setTimeout(() => {
			state.preloaderShow = true;
		}, 1000);
	},
	originalOpen(state, data) {
		state.count = data.index;
		state.results = data.results;
	},
	prev(state) {
		if (state.count > 0) {
			state.count--;
		}	
	},
	next(state) {
		state.count++;
	}	
	
  },
  actions: {

  }
})
