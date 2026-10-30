
import {
    criarChamado,
    atualizarStatus
} from "./services/chamados.js";

const chamado = criarChamado(
    1,
    "Problema com matrícula"
);

console.log("Status inicial:", chamado.status);

// Primeira transição válida
atualizarStatus(chamado, "EM_ATENDIMENTO");
console.log("Após iniciar atendimento:", chamado.status);

// Segunda transição válida
atualizarStatus(chamado, "FINALIZADO");
console.log("Após finalizar:", chamado.status);

// Tentativa de transição inválida
try {
    atualizarStatus(chamado, "ABERTO");
} catch (erro: unknown) {
    if (erro instanceof Error) {
        console.log("Erro esperado:", erro.message);
    }
}
