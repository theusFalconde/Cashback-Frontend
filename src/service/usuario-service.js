import restService from "./rest-service";

const PATH_URL = "/usuario";

const criar = usuario => restService.insert(`${PATH_URL}/criarUsuario`, usuario);

const login = login => restService.request("POST", "/auth/login", login)

export default {
  login: login,
  criar: criar
};
