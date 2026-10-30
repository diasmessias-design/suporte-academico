
import type { Estudante } from "../tipos.js";

const estudantes: Estudante[] = [];

export function cadastrarEstudante(estudante: Estudante): void {
    estudantes.push(estudante);
}

export function buscarEstudante(matricula: string): Estudante | null {
    const estudante = estudantes.find(
        (item) => item.matricula === matricula
    );

    return estudante ?? null;
}

export function listarEstudantes(): Estudante[] {
    return [...estudantes];
}

export function calcularMedia(notas: number[]): number {
    if (notas.length === 0) {
        return 0;
    }

    const soma = notas.reduce(
        (acumulador: number, nota: number): number => {
            return acumulador + nota;
        },
        0
    );

    return soma / notas.length;
}
