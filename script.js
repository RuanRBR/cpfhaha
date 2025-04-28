function calcularDigitosVerificadores(cpf) {
    // Converte o CPF (string) em um array de números
    const numeros = cpf.split('').map(Number);

    // Cálculo do primeiro dígito verificador (10º dígito)
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += numeros[i] * (10 - i);
    }
    const resto1 = soma % 11;
    const digito1 = resto1 < 2 ? 0 : 11 - resto1;

    // Cálculo do segundo dígito verificador (11º dígito)
    soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += numeros[i] * (11 - i);
    }
    soma += digito1 * 2;
    const resto2 = soma % 11;
    const digito2 = resto2 < 2 ? 0 : 11 - resto2;

    return [digito1, digito2];
}

function gerarCPFsValidos() {
    const cpfValidos = [];

    // Testa todas as combinações de 000 a 999 para os 3 primeiros dígitos
    for (let prefixo = 0; prefixo < 1000; prefixo++) {
        const prefixoStr = prefixo.toString().padStart(3, '0');
        const cpfBase = prefixoStr + '135579'; // Junta os 9 primeiros dígitos
        const [d1, d2] = calcularDigitosVerificadores(cpfBase);
        const cpfFormatado = `${prefixoStr}.135.579-${d1}${d2}`;
        cpfValidos.push(cpfFormatado);
    }

    return cpfValidos;
}

// Exemplo de uso:
const cpfsValidos = gerarCPFsValidos();
console.log(cpfsValidos); // Mostra os CPFs válidos