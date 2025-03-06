;
const carro = {
    marca: 'Ford',
    ano: 2020
};
;
const pagamento = {
    metodo: 'mbway',
    valor: 1000,
    carro: carro
};
const processarPagamento = (pagamento) => {
    switch (pagamento.metodo) {
        case 'cartão':
            return `Pagamento Cartão de ${pagamento.valor} efetuado com sucesso! Boa viagem no seu ${pagamento.carro.marca} de ${pagamento.carro.ano}!`;
        case 'mbway':
            return `Pagamento Mbway de ${pagamento.valor} efetuado com sucesso! Boa viagem no seu ${pagamento.carro.marca} de ${pagamento.carro.ano}!`;
        case 'paypal':
            return `Pagamento Paypal de ${pagamento.valor} efetuado com sucesso! Boa viagem no seu ${pagamento.carro.marca} de ${pagamento.carro.ano}!`;
        default:
            return 'Método de pagamento inválido!';
    }
};
console.log(carro.marca, carro.ano);
console.log('----------------------------------');
console.log(processarPagamento({ metodo: 'cartão', valor: 100, carro }));
console.log('----------------------------------');
console.log(processarPagamento(pagamento));
