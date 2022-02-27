import API_URL from './config.js'
import axios from "axios";

export const carService = {
  async getCars(token) {
    let response = await fetch(`${API_URL}/cars`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async getAllCars(token) {
    let response = await fetch(`${API_URL}/cars/admin`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async addCar(token, payload) {
    const response = await fetch(`${API_URL}/cars`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async editCar(token, payload) {
    const response = await fetch(`${API_URL}/cars/${payload._id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },
  
  async removeCar(token, id) {
    const response = await fetch(`${API_URL}/cars/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async updateMaintenance(token, id, payload) {
    const response = await fetch(`${API_URL}/cars/${id}/maintenance`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },

  async updateRefuel(token, id, payload) {
    const response = await fetch(`${API_URL}/cars/${id}/refuel`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(payload)
    })
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    }
  },
  async importCar(token, formData) {
    const headers = { 'Content-Type': 'multipart/form-data', 'Authorization': token };
    const url = `${API_URL}/cars/import`;
    const response = await axios.post(url,formData, {headers});
    console.log(response);
    if(response.data.type == "success"){
      return await response;
    }else{
      throw Error(handleResponses(response.status));
    }
  }

};

function handleResponses(code) {
  let message = ""
  switch (code) {
    case 401:
      message = "Não está autorizado a executar esta ação!"
      break;
    case 400:
      message = "Não foi informado um ficheiro ou o mesmo está no formato errado"
      break;
    default:
      message = "Mensagem desconhecida"
      break;
  }
  return message
}

export default carService;