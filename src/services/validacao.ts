
export type DadosEstudanteEntrada = {
    nome?: unknown;
    matricula?: unknown;
};

export type ResultadoValidacao = {
    valido: boolean;
    erros: string[];
};

export function validarEstudante(
    dados: DadosEstudanteEntrada
): ResultadoValidacao {
    const erros: string[] = [];

    if (
        typeof dados.nome !== "string" ||
        dados.nome.trim().length === 0
    ) {
        erros.push("O nome deve ser uma string não vazia.");
    }

    if (
        typeof dados.matricula !== "string" ||
        !/^\d+$/.test(dados.matricula)
    ) {
        erros.push("A matrícula deve conter apenas números.");
    }

    return {
        valido: erros.length === 0,
        erros
    };
}
