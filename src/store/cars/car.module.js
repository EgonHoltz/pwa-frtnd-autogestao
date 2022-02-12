import carService from "@/api/car.service";
import moment from 'moment';
import { 
  // Actions
  FETCH_CARS,
  FETCH_ADMCARS,
  ADD_CAR,
  EDIT_CAR,
  REMOVE_CAR,
  UPDATE_MAINTENANCE_CAR,
  UPDATE_REFUEL_CAR,
  IMPORT_CAR,
  // Mutations
  SET_CARS,
  SET_CAR,
  SET_MESSAGE
} from "./car.constants";

const state = {
  cars: [],
  car: {}
};

const getters = {
  getCars: state => state.cars,
  getCarsById: state => id => state.cars.find(car => car._id === id),
  getMessage: state => state.message,
  getCar: state => {
    let kmByLiters = 0;
    let kmsOfOil = 0;
    let kmsOfTires = 0;
    let kmsOfBrakes = 0;
    let inspectionDateTemp = new Date;
    if ( state.car.refuel != undefined && state.car.maintenance != undefined && state.car.refuel.actualRefuelKm != undefined &&
      (state.car.refuel.actualRefuelKm - state.car.refuel.lastRefuelKm) != 0){
      inspectionDateTemp = moment(state.car.maintenance.lastInspection).format("DD/MM/YYYY");
      kmByLiters = state.car.refuel.lastRefuelLiters / (state.car.refuel.actualRefuelKm - state.car.refuel.lastRefuelKm);
      kmsOfOil = state.car.refuel.actualRefuelKm - state.car.maintenance.lastOilChange;
      kmsOfTires = state.car.refuel.actualRefuelKm - state.car.maintenance.lastTireChange;
      kmsOfBrakes = state.car.refuel.actualRefuelKm - state.car.maintenance.lastBrakesChange;
      state.car.maintenance.lastInspectionAux = inspectionDateTemp;
    }
    state.car['computed'] = {
      kmByLiters:kmByLiters,
      kmsOfOil:kmsOfOil,
      kmsOfTires:kmsOfTires,
      kmsOfBrakes:kmsOfBrakes,
    };
    return state.car
  }
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
  [FETCH_ADMCARS]: ({ commit, rootState }) => {
    return new Promise((resolve, reject) => {
      carService.getAllCars(rootState.auth.token)
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
  [UPDATE_MAINTENANCE_CAR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      carService.updateMaintenance(rootState.auth.token, payload._id, payload.maintenance)
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
  [UPDATE_REFUEL_CAR]: ({ commit, rootState }, payload) => {
    return new Promise((resolve, reject) => {
      carService.updateRefuel(rootState.auth.token, payload._id, payload.refuel)
        .then(
          res => {
            commit(SET_MESSAGE, `O carro ${res.body.name} foi reabastecido com sucesso!`);
            resolve(res)
          }, err => {
            commit(SET_MESSAGE, err.message)
            reject(err)
          });
    });
  },
  [IMPORT_CAR]: ({ commit, rootState }, objSend) => {
    return new Promise((resolve, reject) => {
      carService.importCar(rootState.auth.token, objSend.userId, objSend.file)
        .then(
          res => {
            commit(SET_MESSAGE, `Viatura exportada com sucesso!`);
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
  [SET_CAR]: (state, car) => {
    state.car = car;
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