
import type { StatusChamado } from "../tipos.js";

export interface DadosChamado {
    readonly id: number;
    titulo: string;
    status: StatusChamado;
}

export function criarChamado(
    id: number,
    titulo: string
): DadosChamado {
    return {
        id,
        titulo,
        status: "ABERTO"
    };
}


export function atualizarStatus(
    chamado: DadosChamado,
    novoStatus: StatusChamado
): void {
    const transicaoValida =
        (chamado.status === "ABERTO" &&
         novoStatus === "EM_ATENDIMENTO") ||
        (chamado.status === "EM_ATENDIMENTO" &&
         novoStatus === "FINALIZADO");

    if (!transicaoValida) {
        throw new Error(
            `Transição inválida: ${chamado.status} → ${novoStatus}`
        );
    }

    chamado.status = novoStatus;
}
