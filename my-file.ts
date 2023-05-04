// //Fonction qui retourne l'addition de deux nombres saisies en paramètre
// function addition(x: number,y: number) {
//     return x+y;
// }
// const resultat = addition(10,20);
// const messageAddition = 'Fonction Addition -- ';
// console.log(messageAddition + resultat);


// // Fonction qui retourne la vie d'un personnage après avoir été amoché 
// function damage(persoAFrapper: { life: number }, montant: number) : number {
//     persoAFrapper.life -= montant;
//     return persoAFrapper.life;
// }
// const result = damage({ life: 100 },31);
// const messageDamage = 'Fonction Damage -- ';
// console.log(messageDamage + result);

// // Fonction qui retourne un message avec le nom d'une personne et son solde en banque
// function sayHello(target: { firstName: string, money: number }) : string {
//     return `Salut ${target.firstName}, tu as ${target.money} € sur ton compte en banque`;
// }
// const messageHello: string = sayHello({ firstName: 'Patrick', money: 69 });
// console.log(messageHello);

// // Nouveaux-types
// // Avec le mot clé 'type'

// type unePersonne = {
//     nom: string;
//     prenom: string;
//     argent: number;
//     estSympa: boolean;
// }

// // Fonction qui utilise un nouveau type
// function identitePers(pers: unePersonne) {
//     return `Salut ${pers.prenom} ${pers.nom}, tu as ${pers.argent} € sur ton compte en banque. Mais tu es sympa ? : ${pers.estSympa}`;
// }

// const unHommeCharismatique = identitePers({nom: 'Etcheverry', prenom: 'Patrick', argent: 69, estSympa: true});
// console.log(unHommeCharismatique);

// // Création d'un affichage UHC DS
// type Camp = 'Démon' | 'Slayer';

// type Role = 'Muzan' | 'Kokushibo' | 'Doma' | 'Akaza' | 'Kagaya' | 'Tengen' | 'Sanemi' | 'Gyomeï';

// type effet = {
//     nom: string;
//     intensite: string;
//     etat: string;
// }

// type item = {
//     nom: string;
//     fonctionnalite: string;
// }

// interface unPerso {
//     id: string | number;
//     nom: Role;
//     camp: Camp;
//     autreCamp: string;
//     citation: string;
//     effet1?: effet;
//     effet2?: effet;
//     item1?: item;
//     item2?: item;
// }

// const personnages: unPerso[] = [
//     {
//       id: 'D01',
//       nom: 'Muzan',
//       camp: 'Démon',
//       autreCamp: 'Slayers',
//       citation: 'Je suis le cousin de MJ',
//       effet1: {nom:'Force',intensite:'I',etat:'Jour'},
//       effet2: {nom:'Résistance',intensite:'I',etat:'Nuit'},
//       item1: {nom:'Sang de démon', fonctionnalite:"Vous pouvez contaminer quelqu'un pour qu'il rejoigne votre camp"}
//     },
//     {
//       id: 'S01',
//       nom: 'Kagaya',
//       camp: 'Slayer',
//       autreCamp: 'Démons',
//       citation: 'Je suis le cousin de MJ',
//       effet1: {nom:'Faiblesse',intensite:'I',etat:'Jour'},
//       effet2: {nom:'Faiblesse',intensite:'I',etat:'Nuit'},
//     },
//     {
//       id: 'D02',
//       nom: 'Kokushibo',
//       camp: 'Démon',
//       autreCamp: 'Slayers',
//       citation: "J'ai 6 yeux",
//       effet1: {nom:'Force',intensite:'I',etat:'Nuit'}
//     },
//     {
//       id: 'D03',
//       nom: 'Doma',
//       camp: 'Démon',
//       autreCamp: 'Slayers',
//       citation: "Je maitrise la glace",
//       effet1: {nom:'Force',intensite:'I',etat:'Nuit'}
//     },
//     {
//       id: 'D04',
//       nom: 'Akaza',
//       camp: 'Démon',
//       autreCamp: 'Slayers',
//       citation: "Je vie dans un cirque",
//       effet1: {nom:'Force',intensite:'I',etat:'Nuit'}
//     },
//     {
//       id: 'S02',
//       nom: 'Tengen',
//       camp: 'Slayer',
//       autreCamp: 'Démons',
//       citation: "J'ai 3 copines",
//       effet1: {nom:'Force',intensite:'I',etat:'Nuit'},
//       effet2: {nom:'Vitesse',intensite:'II',etat:'Jour'}
//     },
//     {
//       id: 'S03',
//       nom: 'Sanemi',
//       camp: 'Slayer',
//       autreCamp: 'Démons',
//       citation: "J'ai pas peur",
//       effet1: {nom:'Force',intensite:'I',etat:'Jour'},
//       effet2: {nom:'Vitesse',intensite:'II',etat:'Jour'}
//     },
//     {
//       id: 'S04',
//       nom: 'Gyomeï',
//       camp: 'Slayer',
//       autreCamp: 'Démons',
//       citation: "Paix à ton âme",
//       effet1: {nom:'Force',intensite:'I',etat:'Nuit'},
//       effet2: {nom:'Invisibilité',intensite:'I',etat:'Jour'}
//     }
//   ];

// function getRandomCharacter(): unPerso {
//     // Génère un nombre aléatoire entre 0 et la longueur du tableau de personnages
//     const randomIndex = Math.floor(Math.random() * personnages.length);
  
//     // Retourne le personnage sélectionné aléatoirement
//     return personnages[randomIndex];
// }

//   // Récupère un personnage aléatoire
// const perso = getRandomCharacter();

// console.log('---Demon Slayer UHC---');
// console.log('');
// console.log(`Vous êtes : ${perso.nom}`);
// console.log(`<< ${perso.citation} >>`)
// console.log('');
// console.log(`Votre rôle est d'éliminer tous les ${perso.autreCamp}`);
// console.log('');
// if(perso.effet1) {
//     console.log(`Pour cela, vous possédez ${perso.effet1.nom} ${perso.effet1.intensite} de ${perso.effet1.etat}.`);
// }

// if(perso.effet2) {
//     console.log(`Et ${perso.effet2.nom} ${perso.effet2.intensite} de ${perso.effet2.etat}`);
// }

// if(perso.item1) {
//     console.log('---Vous possédez des items pour vous aider---');
//     console.log('');
//     console.log(`${perso.item1.nom}`);
//     console.log('');
//     console.log(`${perso.item1.fonctionnalite}`)
// }

// if(perso.item2) {
//     console.log('');
//     console.log(`${perso.item2.nom}`);
//     console.log('');
//     console.log(`${perso.item2.fonctionnalite}`)
// }

// console.log('---Demon Slayer UHC---');
// console.log('');

// //-------------------------------------------

type WithMagic = {
    magic: number;
 }

type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };

 type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
 }
 
 type Pet = Character;

 type MagicalPet = Pet & WithMagic;
 
 type Hero = Character & {
    pets?: Pet[];
    equipments?: Equipment[]
 };

 type Magician = Hero & WithMagic;
 
 const babyDragon: Pet = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
 };
 
 const babyLicorn: MagicalPet = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
 };
 
 const smallArmor: Equipment = {
    price: 30,
    attack: 2,
    defense: 5,
 };
 
 const smallSword: Equipment = {
    price: 20,
    attack: 5,
 };
 
 const smallShield: Equipment = {
    price: 15,
    defense: 10,
 };
 
 const smallMagicalWand: Equipment & WithMagic = {
    price: 50,
    attack: 4,
    magic: 10,
 };
 
 const myWarriorHero: Hero = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [
       smallArmor,
       smallSword,
       smallShield,   
    ],
 };
 
 const myMagicienHero: Magician = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
 };