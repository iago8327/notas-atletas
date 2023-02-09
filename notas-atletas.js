let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let avaliacoes = atletas.map(function (atleta) {
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas: ${atleta.notas}`);
  
    let novasNotas = atleta.notas.sort((a,b) => a - b).slice(1,4);
    let notaBase = 0;
    for (let i = 0; i < novasNotas.length; i++) {
        notaBase = notaBase + novasNotas[i];
    }
    console.log(`Média: ${notaBase / novasNotas.length}`);
});
