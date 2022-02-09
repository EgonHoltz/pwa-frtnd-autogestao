import carService from "@/api/car.service";
import { 
  // Actions
  FETCH_CARS,
  ADD_CAR,
  EDIT_CAR,
  REMOVE_CAR,
  UPDATE_MAINTENANCE_CAR,
  UPDATE_REFUEL_CAR,
  // Mutations
  SET_CARS,
  SET_MESSAGE
} from "./car.constants";

const state = {
  cars: []
};

const getters = {
  getCars: state => state.cars,
  getCarsById: state => id => state.cars.find(car => car._id === id),
  getMessage: state => state.message,
  
};

const actions = {
  [FETCH_CARS]: ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      carService.getCars(rootState.auth.token)
        .then(
          res => {
            commit(SET_CARS, res.body);
            resolve(res)
          },
          err => {
            commit(SET_MESSAGE, err.message)
            reject(err)
          });
    })
  },
  [ADD_CAR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      carService.addCar(rootState.auth.token, payload)
        .then(
          res => {
            commit(SET_MESSAGE, `O carro ${res.body.name} foi adicionado com sucesso!`);
            resolve(res)
          }, err => {
            commit(SET_MESSAGE, err.message)
            reject(err)
          });
    });
  },
  [EDIT_CAR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      carService.editCar(rootState.auth.token, payload)
        .then(
          res => {
            commit(SET_MESSAGE, `O carro ${res.body.name} foi atualizado com sucesso!`);
            resolve(res)
          }, err => {
            commit(SET_MESSAGE, err)
            reject(err)
          });
    });
  },
  [REMOVE_CAR]: ({ commit, rootState }, id) => {
    return new Promise((resolve, reject) => {
      carService.removeCar(rootState.auth.token, id)
        .then(res => {
          commit(SET_MESSAGE, `O carro foi removido com sucesso!`);
          resolve(res)
        }, err => {
          commit(SET_MESSAGE, err.message)
          reject(err)
        });
    });
  },
  [UPDATE_MAINTENANCE_CAR]: ({ commit, rootState }, id, payload) => {
    return new Promise((resolve, reject) => {
      carService.addCar(rootState.auth.token, id, payload)
        .then(
          res => {
            commit(SET_MESSAGE, `Detahles da manutenção do carro ${res.body.name} foi adicionado com sucesso!`);
            resolve(res)
          }, err => {
            commit(SET_MESSAGE, err.message)
            reject(err)
          });
    });
  },
  [UPDATE_REFUEL_CAR]: ({ commit, rootState }, id, payload) => {
    return new Promise((resolve, reject) => {
      carService.addCar(rootState.auth.token, id, payload)
        .then(
          res => {
            commit(SET_MESSAGE, `O carro ${res.body.name} foi reabastecido com sucesso!`);
            resolve(res)
          }, err => {
            commit(SET_MESSAGE, err.message)
            reject(err)
          });
    });
  }
};

export const mutations = {
  [SET_CARS]: (state, cars) => {
    state.cars = cars;
  },
  [SET_MESSAGE]: (state, message) => {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}