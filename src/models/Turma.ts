
import { Estudante } from "./Estudante.js";
import { VinculoNaTurma } from "./VinculoNaTurma.js";

export class Turma {
    readonly codigo: string;
    readonly componenteCurricular: string;

    #vinculos: VinculoNaTurma[] = [];

    constructor(codigo: string, componenteCurricular: string) {
        this.codigo = codigo;
        this.componenteCurricular = componenteCurricular;
    }

    matricular(estudante: Estudante): void {
        const jaMatriculado = this.#vinculos.some(
            (vinculo: VinculoNaTurma): boolean =>
                vinculo.estudante.matricula === estudante.matricula
        );

        if (jaMatriculado) {
            throw new Error("Estudante já matriculado nesta turma.");
        }

        const dataEntrada: string = new Date()
            .toISOString()
            .slice(0, 10);

        const vinculo = new VinculoNaTurma(
            estudante,
            dataEntrada,
            0
        );

        this.#vinculos.push(vinculo);
    }

    listarMatriculados(): {
        matricula: string;
        nome: string;
        dataEntrada: string;
        frequencia: number;
    }[] {
        return this.#vinculos.map((vinculo: VinculoNaTurma) => ({
            matricula: vinculo.estudante.matricula,
            nome: vinculo.estudante.nome,
            dataEntrada: vinculo.dataEntrada,
            frequencia: vinculo.frequencia
        }));
    }
}
