
import { Estudante } from "./Estudante.js";
import type { StatusChamado } from "../tipos.js";

export class Chamado {
    readonly #id: number;
    readonly #titulo: string;
    readonly #solicitante: Estudante;

    #responsavel: string | null;
    #status: StatusChamado = "ABERTO";

    constructor(
        id: number,
        titulo: string,
        solicitante: Estudante,
        responsavel: string | null = null
    ) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("ID do chamado inválido.");
        }

        if (!titulo.trim()) {
            throw new Error("Título do chamado inválido.");
        }

        if (!(solicitante instanceof Estudante)) {
            throw new Error("O solicitante deve ser um estudante.");
        }

        if (responsavel !== null && !responsavel.trim()) {
            throw new Error("Responsável inválido.");
        }

        this.#id = id;
        this.#titulo = titulo;
        this.#solicitante = solicitante;
        this.#responsavel = responsavel;
    }

    get id(): number {
        return this.#id;
    }

    get titulo(): string {
        return this.#titulo;
    }

    get solicitante(): Estudante {
        return this.#solicitante;
    }

    get responsavel(): string | null {
        return this.#responsavel;
    }

    get status(): StatusChamado {
        return this.#status;
    }

    iniciarAtendimento(responsavel: string): void {
        if (this.#status !== "ABERTO") {
            throw new Error("O chamado não pode iniciar atendimento.");
        }

        if (!responsavel.trim()) {
            throw new Error("Responsável inválido.");
        }

        this.#responsavel = responsavel;
        this.#status = "EM_ATENDIMENTO";
    }

    finalizar(): void {
        if (this.#status !== "EM_ATENDIMENTO") {
            throw new Error("O chamado não pode ser finalizado.");
        }

        this.#status = "FINALIZADO";
    }

    resumo(): {
        id: number;
        titulo: string;
        solicitante: string;
        responsavel: string | null;
        status: StatusChamado;
    } {
        return {
            id: this.#id,
            titulo: this.#titulo,
            solicitante: this.#solicitante.nome,
            responsavel: this.#responsavel,
            status: this.#status
        };
    }
}
