let anyEstaDeVolta: any; 
let unknownValue: unknown; 

let stringTest: string = 'agora vai';


if (typeof unknownValue === 'string') {
    stringTest = unknownValue;
}



function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo};
}

jogaErro('deu ruim', 500)