export type Estudante = {
    matricula: string;
    nome: string;
    curso: string;
    ativo: boolean;
};

export type StatusChamado =
    | "ABERTO"
    | "EM_ATENDIMENTO"
    | "FINALIZADO";