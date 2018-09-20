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
				url: '/nasaimages/galaxies',
				text: 'Галактики'
			},
			{
				url: '/nasaimages/sun',
				text: 'Солнце'
			},
			{
				url: '/nasaimages/mercury',
				text: 'Меркурий'
			},
			{
				url: '/nasaimages/venus',
				text: 'Венера'
			},
			{
				url: '/nasaimages/earth',
				text: 'Земля'
			},
			{
				url: '/nasaimages/mars',
				text: 'Марс'
			},
			{
				url: '/nasaimages/jupiter',
				text: 'Юпитер'
			},
			{
				url: '/nasaimages/saturn',
				text: 'Сатурн'
			},
			{
				url: '/nasaimages/uranus',
				text: 'Уран'
			},
			{
				url: '/nasaimages/neptune',
				text: 'Нептун'
			},
			{
				url: '/nasaimages/pluto',
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
