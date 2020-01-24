const formatErrorMessage = message => {
    if (Array.isArray(message)) {
        let retorno = ''
        message.forEach(m => {
            for (let attr in m.constraints) {
                retorno += m.constraints[attr] + '\n'
            }
        })
        return retorno;
    } else {
        return message
    }
}

const numberToReal = numero => {
    numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

const formataCPF = cpf => {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const removeMaskCpf = cpf => cpf.replace(/[^\d]+/g, '')

export default {
    formatErrorMessage: formatErrorMessage,
    removeMaskCpf: removeMaskCpf,
    numberToReal: numberToReal,
    formataCPF: formataCPF
}