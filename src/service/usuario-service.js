import restService from "./rest-service";

const PATH_URL = "/usuario";

const insert = usuario => restService.insert(PATH_URL, usuario);

const update = usuario => restService.update(PATH_URL, usuario);

const insertUpdate = usuario => {
  if(usuario.id === null || usuario.id === undefined) {
    return insert(usuario)
  } else {
    return update(usuario)
  }
}

const login = login => restService.request("POST", "/login", login)

export default {
  login: login,
  insertUpdate: insertUpdate
};
