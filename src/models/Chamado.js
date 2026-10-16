
import { Estudante } from "./Estudante.js";

export class Chamado {
    #id;
    #titulo;
    #solicitante;
    #responsavel;
    #status = "ABERTO";

    constructor(id, titulo, solicitante, responsavel = null) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("ID do chamado inválido.");
        }

        if (typeof titulo !== "string" || !titulo.trim()) {
            throw new Error("Título do chamado inválido.");
        }

        if (!(solicitante instanceof Estudante)) {
            throw new Error("O solicitante deve ser um estudante.");
        }

        if (responsavel !== null &&
            (typeof responsavel !== "string" || !responsavel.trim())) {
            throw new Error("Responsável inválido.");
        }

        this.#id = id;
        this.#titulo = titulo;
        this.#solicitante = solicitante;
        this.#responsavel = responsavel;
    }

    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get solicitante() {
        return this.#solicitante;
    }

    get responsavel() {
        return this.#responsavel;
    }

    get status() {
        return this.#status;
    }

    iniciarAtendimento(responsavel) {
        if (this.#status !== "ABERTO") {
            throw new Error("O chamado não pode iniciar atendimento.");
        }

        if (typeof responsavel !== "string" || !responsavel.trim()) {
            throw new Error("Responsável inválido.");
        }

        this.#responsavel = responsavel;
        this.#status = "EM_ATENDIMENTO";
    }

    finalizar() {
        if (this.#status !== "EM_ATENDIMENTO") {
            throw new Error("O chamado não pode ser finalizado.");
        }

        this.#status = "FINALIZADO";
    }

    resumo() {
        return {
            id: this.#id,
            titulo: this.#titulo,
            solicitante: this.#solicitante.nome,
            responsavel: this.#responsavel,
            status: this.#status
        };
    }
}
