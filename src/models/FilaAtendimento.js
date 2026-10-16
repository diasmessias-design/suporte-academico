
import { Chamado } from "./Chamado.js";

export class FilaAtendimento {
    #chamados = [];

    adicionar(chamado) {
        if (!(chamado instanceof Chamado)) {
            throw new Error("A fila aceita apenas chamados.");
        }

        this.#chamados.push(chamado);
    }

    proximo() {
        if (this.#chamados.length === 0) {
            return null;
        }

        return this.#chamados.shift();
    }

    tamanho() {
        return this.#chamados.length;
    }

    resumo() {
        return this.#chamados.map(chamado => chamado.resumo());
    }
}
