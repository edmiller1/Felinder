import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catImages: [],
    allCats: [],
    likedCats: [],
    superLikedCats: [],
    unlikedCats: [],
    gettingCat: false,
    catAge: ['2 months', '3 months', '4 months', '5 months', '6 months', '7 months', '8 months', '9 months', '10 months', '11 months', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    randomName: '',
    randomAge: 0,
    randomDistance: 0,
    status: '',
    cat: {},
    catFacts: [],
    randomFact: {}

  },
  getters: {
    getLoadedCats: state => {
      return state.catImages;
    },
    getAllCats: state => {
      return state.allCats;
    },
    getLikedCats: state => {
      return state.likedCats;
    },
    getSuperLikedCats: state => {
      return state.superLikedCats;
    },
    getUnlikedCats: state => {
      return state.unlikedCats;
    },
    getLoadedFacts: state => {
      return state.catFacts;
    },
    getRandomFact: state => {
      return state.randomFact;
    }
  },
  mutations: {
    CREATE_APP(state) {
      state.allCats = JSON.parse(localStorage['cats']);
    },
    GET_RANDOM_CAT(state, payload) {
      state.catImages.push(payload);
    },
    REMOVE_CAT(state) {
      state.catImages.splice(0, 1);
    },
    ADD_CAT(state) {
      state.allCats.push(state.catImages[0]);
      localStorage['cats'] = JSON.stringify(state.allCats);
    },
    ADD_LIKED_CAT(state) {
      state.status = 'liked';
      state.likedCats.push(state.catImages[0]);
    },
    ADD_UNLIKED_CAT(state) {
      state.status = 'unliked';
      state.unlikedCats.push(state.catImages[0]);
    },
    ADD_SUPERLIKED_CAT(state) {
      state.status = 'superLiked';
      state.superLikedCats.push(state.catImages[0]);
    },
    GET_RANDOM_AGE(state) {
      state.randomAge = state.catAge[Math.floor(Math.random() * state.catAge.length)]
    },
    GET_RANDOM_NAME(state) {
      const catNames = require('cat-names');
      state.randomName = catNames.random();
    },
    GET_RANDOM_DISTANCE(state) {
      state.randomDistance = Math.floor(Math.random() * 72 + 1);
    },
    GET_CAT_STATUS(state) {
      state.cat.status = state.status;
      return state.cat.status;
    },
    GET_CAT_FACT(state, payload) {
      state.randomFact = payload;
      console.log(state.randomFact);
    },
    GET_RANDOM_FACT(state) {
      state.randomFact = state.catFacts[0];
      console.log("I am a random fact: " + state.randomFact);
      return state.randomFact;
    },
    REMOVE_FROM_ALLCATS(state, cat) {
      let index = state.allCats.indexOf(cat);
      state.allCats.splice(index, 1);
    }
  },
  actions: {
    async getCatImages({
      commit,
      state,
    }) {
      commit('GET_RANDOM_AGE');
      commit('GET_RANDOM_DISTANCE');
      commit('GET_RANDOM_NAME');
      try {
        let query_params = {
          limit: 1,
          mime_types: 'jpg',
          size: "full"
        };
        axios.get("https://api.thecatapi.com/v1/images/search", {
            params: query_params
          })
          .then(response => {
            state.cat = {
              age: state.randomAge,
              distance: state.randomDistance,
              name: state.randomName,
              catData: response.data,
              status: state.status,
            }
            commit('GET_RANDOM_CAT', state.cat)
            console.log(
              state.cat
            )
          });
      } catch (error) {
        console.log(error);
      }
    },
    async getCatFacts({
      commit,
    }) {
      axios.get("https://catfact.ninja/fact")
        .then(response => {
          commit("GET_CAT_FACT", response.data);
        });
    }
  },
  modules: {}
})