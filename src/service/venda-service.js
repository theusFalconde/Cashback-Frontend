import restService from "./rest-service";

const PATH_URL = "/venda";

const criarVenda = venda => restService.insert(`${PATH_URL}/criarVenda`, venda);

const atualizarVenda = venda => restService.update(`${PATH_URL}/atualizarVenda/${venda.id}`, venda);

const deletarVenda = id => restService.remove(`${PATH_URL}/deletarVenda`, id);

const buscarVendasPorCpf = cpf => restService.request("GET", `${PATH_URL}/buscarVendasPorCpf/${cpf}`, {})

const buscarTodasVendas = () => restService.request("GET", `${PATH_URL}/buscarTodasVendas`, {})

const buscarCashbackAcumulado = cpf => restService.request("GET", `${PATH_URL}/buscarCashbackAcumulado/${cpf}`, {})

const criarAtualizarVenda = venda => {
  if (venda.id === null || venda.id === undefined) {
    return criarVenda(venda)
  }
  return atualizarVenda(venda)
}

const buscarVendas = cpf => {
  if (cpf) {
    return buscarVendasPorCpf(cpf)
  }
  return buscarTodasVendas();
}

export default {
  criarAtualizarVenda: criarAtualizarVenda,
  deletarVenda: deletarVenda,
  buscarVendas: buscarVendas,
  buscarCashbackAcumulado: buscarCashbackAcumulado
};
