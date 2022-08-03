"use strict";
let valorAny;
valorAny - 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
}
somarString(valorString, valorString2);
somarString('ola', 'como vai?');
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('de erro', 500);
