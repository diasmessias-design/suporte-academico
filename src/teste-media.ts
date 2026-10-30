
import { calcularMedia } from "./services/estudantes.js";

const notas: number[] = [8, 9, 7];

const media: number = calcularMedia(notas);

console.log("Notas:", notas);
console.log("Média:", media);
console.log("Média sem notas:", calcularMedia([]));
