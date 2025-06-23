const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];

// Con bucle for!!

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] +'.com');
    }
  }
}
  
//Con .map!!

pronoun.map((pronombre) => {
  adj.map((adjetivo) => {
    noun.map((nombre) => {
      const resultado = `${pronombre}${adjetivo}${nombre}.com`;
      console.log(resultado);
    });
  });
});