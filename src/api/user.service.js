import API_URL from './config.js'

export const userService = {
  async getUsers(token) {
    const response = await fetch(`${API_URL}/users`, {
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

  async addUser(token, payload) {
    const response = await fetch(`${API_URL}/users`, {
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

  async editUser(token, payload) {
    const response = await fetch(`${API_URL}/users/${payload._id}`, {
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

  async removeUser(token, id) {
    const response = await fetch(`${API_URL}/users/${id}`, {
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

  async activateUser(token, id) {
    const response = await fetch(`${API_URL}/users/admin/activate/${id}`, {
      method: "PUT",
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

  async deactivateUser(token, id) {
    const response = await fetch(`${API_URL}/users/admin/deactivate/${id}`, {
      method: "PUT",
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
  }

};

function handleResponses(code) {
  let message = ""
  switch (code) {
    case 401:
      message = "N??o est?? autorizado a executar esta a????o!"
      break;
    case 406:
      message = "A????o n??o aceit??vel. Verifique se preencheu bem todos os campos!"
      break;
    case 409:
      message = "J?? existe um utilizador com este username!"
      break;
    default:
      message = "Mensagem desconhecida"
      break;
  }
  return message
}

export default userService;
