

import { Chamado } from "./Chamado.js";

export class FilaAtendimento {
    #chamados: Chamado[] = [];

    adicionar(chamado: Chamado): void {
        if (!(chamado instanceof Chamado)) {
            throw new Error("A fila aceita apenas chamados.");
        }

        this.#chamados.push(chamado);
    }

    proximo(): Chamado | null {
        if (this.#chamados.length === 0) {
            return null;
        }

        return this.#chamados.shift() ?? null;
    }

    tamanho(): number {
        return this.#chamados.length;
    }

    resumo(): ReturnType<Chamado["resumo"]>[] {
        return this.#chamados.map(
            (chamado: Chamado) => chamado.resumo()
        );
    }
}

