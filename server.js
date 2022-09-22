//Importation des modules requis
const http = require('http');
const Fs = require("fs");

//Définition de l'adresse et du port
const hostname = '127.0.0.1';
const port = 3000;

//Création du serveur
const server = http.createServer((req, res) => {

    //Permet d'obtenir un tableau avec les noms de dossier/fichier demandés, console.log permet de les vérifier
    let tab = req.url.split('/');
    console.log(tab)
        //folder contient l'élément suivant le 1er /, le nom de dossier ou le nom de fichier pour les HTML
    let folder = tab[1]
        //fileName contient l'élément suivant le 2nd /, le nom du fichier pour les CSS et JS
    let fileName = tab[2]

    //Permet de renvoyer l'accueil pour l'URL de base du site
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        let index = Fs.readFileSync('./content/accueil.html');
        res.end(index);
    }
    //Permet de renvoyer les feuilles de style contenues dans le dossier css si l'URL est au format /css/...
    //Fournit des ressources demandées par les fichiers HTML
    else if (folder == "css") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        let cssContent = Fs.readFileSync('./content/css/' + fileName);
        res.end(cssContent);
    }
    //Permet de renvoyer les images contenues dans le dossier images si l'URL est au format /images/...
    //Fournit des ressources demandées par les fichiers HTML et permet d'accéder aux images quand on souhaite les afficher seules
    else if (folder == "images") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        let imgContent = Fs.readFileSync('./content/images/' + fileName);
        res.end(imgContent);
    }
    //Permet de renvoyer les scripts js contenus dans le dossier script si l'URL est au format /scripts/...
    //Fournit des ressources demandées par les fichiers HTML
    else if (folder == "script") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        let scriptContent = Fs.readFileSync('./content/script/' + fileName);
        res.end(scriptContent);
    }
    //Permet d'accéder aux fichiers HTML et donc aux différentes pages du site.
    //Pour les fichiers HTML, en raison de l'arborescence, folder correspond au nom du fichier, et l'URL ne se poursuit pas plus loin
    //La taille de tab doit donc être de 2
    else if ((tab.length == 2) && ((folder == "accueil.html") || (folder == "contacts.html") || (folder == "liens.html") || (folder == "sa_vie.html") || (folder == "ses_amis.html") || (folder == "ses_amours.html") || (folder == "ses_oeuvres.html") || (folder == "ses_voyages.html"))) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        let htmlFile = Fs.readFileSync('./content/' + folder);
        res.end(htmlFile);
    }
    //Renvoie une simple erreur 404 en cas de page introuvable sur le serveur
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("ERREUR 404 : Page introuvable. Vous ne devriez pas etre la.");
    }

});

//Permet de lancer le serveur
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});