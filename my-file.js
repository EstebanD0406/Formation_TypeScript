// function addition(x: number,y: number) {
//     return x+y;
// }
// const resultat = addition(10,20);
// console.log(resultat);
function damage(persoAFrapper, montant) {
    persoAFrapper.life -= montant;
    return persoAFrapper.life;
}
var resultat = damage({ life: 100 }, 31);
console.log(resultat);
