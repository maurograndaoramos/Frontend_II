;
const carro = {
    marca: 'Ford',
    ano: 2020
};
;
const processarPagamento = (pagamento) => {
    switch (pagamento.metodo) {
        case 'cartão':
            return `Pagamento Cartão de ${pagamento.valor} efetuado com sucesso!`;
        case 'mbway':
            return `Pagamento Mbway de ${pagamento.valor} efetuado com sucesso!`;
        case 'paypal':
            return `Pagamento Paypal de ${pagamento.valor} efetuado com sucesso!`;
        default:
            return 'Método de pagamento inválido!';
    }
};
console.log(carro, carro.marca, carro.ano);
console.log('----------------------------------');
console.log(processarPagamento({ metodo: 'cartão', valor: 100, carro }));
