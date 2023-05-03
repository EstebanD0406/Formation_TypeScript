//Fonction qui retourne l'addition de deux nombres saisies en paramètre
function addition(x: number,y: number) {
    return x+y;
}
const resultat = addition(10,20);
const messageAddition = 'Fonction Addition -- ';
console.log(messageAddition + resultat);


// Fonction qui retourne la vie d'un personnage après avoir été amoché 
function damage(persoAFrapper: { life: number }, montant: number) : number {
    persoAFrapper.life -= montant;
    return persoAFrapper.life;
}
const result = damage({ life: 100 },31);
const messageDamage = 'Fonction Damage -- ';
console.log(messageDamage + result);

// Fonction qui retourne un message avec le nom d'une personne et son solde en banque
function sayHello(target: { firstName: string, money: number }) : string {
    return `Salut ${target.firstName}, tu as ${target.money} € sur ton compte en banque`;
}
const messageHello: string = sayHello({ firstName: 'Patrick', money: 69 });
console.log(messageHello);

// Nouveaux-types
// Avec le mot clé 'type'

type unePersonne = {
    nom: string;
    prenom: string;
    argent: number;
    estSympa: boolean;
}

// Fonction qui utilise un nouveau type
function identitePers(pers: unePersonne) {
    return `Salut ${pers.prenom} ${pers.nom}, tu as ${pers.argent} € sur ton compte en banque. Mais tu es sympa ? : ${pers.estSympa}`;
}

const unHommeCharismatique = identitePers({nom: 'Etcheverry', prenom: 'Patrick', argent: 69, estSympa: true});
console.log(unHommeCharismatique);

// Création d'un affichage UHC DS