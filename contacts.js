/* 
Activité : gestion des contacts
*/

// Initialise un contact
var Contact = {
    // Initialise le personnage
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        
    },
   // Renvoie la description du contact
    decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom + "";
        return description;
    }
};

// Contacts initiaux
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Abbas", "Mahmoud");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// Gestion du menu

console.log("Bienvenue dans le gestionnaire de contacts !");
console.log("1 : Lister les contacts ");
console.log("2 : Ajouter un contact ");
console.log("0 : Quitter ");


var choix = (prompt("Choisissez une option :"));

while (choix != "zob"){
    


switch (choix)
    {
        case "1" : 
            // Lister les contacts
            console.log("Voici la liste de tous vos contacts :");
            contacts.forEach(function (Contact){
            console.log(Contact.decrire());
            });
            console.log("1 : Lister les contacts ");
            console.log("2 : Ajouter un contact ");
            console.log("0 : Quitter ");
            var choix = (prompt("Choisissez une option :"));
            break;
        
        case "2" :
            // Ajouter un contact
            var nom = (prompt("Entrez le nom du nouveau contact :"));
            var prenom = (prompt("Entrez le prénom du nouveau contact :"));
            var newContact = Object.create(Contact);
            newContact.init(nom, prenom);
            contacts.push(newContact);
            console.log("Le nouveau contact a été ajouté :");
            console.log("1 : Lister les contacts ");
            console.log("2 : Ajouter un contact ");
            console.log("0 : Quitter ");
            var choix = (prompt("Choisissez une option :"));
            
            break;
        
        case "0" : 
            // Quitter
            console.log("Au revoir !");
            var choix = "zob";
            break;
            
        default:
            console.log("Je n'ai pas compris !") 
            var choix = (prompt("Choisissez une option :"));
            
    }
}
