const jogadores = {
  nome: "",
  pontos: 0,
};

const jogador1 = {
  nome: "Mario",
  pontos: 12,
};

const jogador2 = {
  nome: "Luigi",
  pontos: 10,
};

function RaceStart() {
  console.log(`A corrida entre ${jogador1.nome} e ${jogador2.nome} começou!`);
}

RaceStart();

console.log(`${jogador1.nome} tem ${jogador1.pontos} pontos `);

if (jogador1.pontos > jogador2.pontos) {
  console.log(`${jogador1.nome} é o ganhador`);
} else {
  console.log(`${jogador2.nome} é o ganhador`);
}
