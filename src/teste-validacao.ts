
import { validarEstudante } from "./services/validacao.js";

const estudanteValido = {
    nome: "João",
    matricula: "2026001"
};

const estudanteInvalido = {
    nome: "",
    matricula: 2026002
};

console.log("Estudante válido:");
console.log(validarEstudante(estudanteValido));

console.log("Estudante inválido:");
console.log(validarEstudante(estudanteInvalido));
