# TP 3 : Projet 1 - starship

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).  
  
  1. Dans le dossier `tp3/` exécutez
```bash  	  
tp3$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp3$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

- Nom : BELAL
- Prenom : DAMYA
- Numéro Etudiant : 42322464
- Niveau : L2 INFORMATIQUE
- Groupe : 7 

### Explication de comment on exécute le projet : 

#### Installation :
Avant de lancer le jeu, il faut installer les dépendances nécessaires avec npm : 
- npm install

#### Construire le projet :
Pour générer une version optimisée du jeu :
- npm run build

#### Lancer le projet en mode développement :
Pour voir les modifications en direct pendant le développement :
- npm run dev

### Modélisation du code :

J'ai choisis d'organiser le code en plusieurs classes pour que chaque élément du jeu soit bien séparé :

* Game : la classe principale qui gère le déroulement du jeu l'animation des éléments et le score elle contient aussi la logique pour la gestion des collisions et la suppression des éléments hors de l'écran

* StarShip : cette classe représente le vaisseau controlé par le joueur il peut se déplacer verticalement et tirer des shoots

* Shoot : cette classe représente un tir lancé par le vaisseau il avance vers la droite et peut toucher les soucoupes s'il sort de l'écran il est supprimé

* Saucer : cette classe représente les soucoupes volantes qui apparaissent aléatoirement et traversent l'écran si elles sont touchées elles tombent si elles sortent de l'écran a gauche le score diminue

* KeyManager : cette classe permet de gérer les entrées clavier pour bouger le vaisseau de haut en bas 

J'ai choisis cette structure pour rendre le code plus facile à comprendre et à modifier par exemple la classe game ne s'occupe pas directement du déplacement du vaisseau c'est StarShip qui le fait 

Le score du jeu est mis a jour dynamiquement grace à document.getElementById("score").textContent = this.score; dans la méthode updateScore() de la classe Game

A chaque soucoupe touchée le score augmente de 200 points et si une soucoupe sort de l'écran sans être détruite il diminue de 1000 points

A la fin j'ai ajouté un setInterval où des soucoupes peuvent apparaître automatiquement toutes les 750ms avec une chance sur deux d'être générées ce qui rend le jeu plus dynamique

### Travail réalisé

- J'ai créé les classes principales pour gérer le vaisseau les tirsles soucoupes et le gestionnaire de touches

- J'ai mis en place un système pour gérer les collisions entre les tirs et les soucoupes

- J'ai ajouté un système de score qui se met a jour quand un tir touche une soucoupe ou quand une soucoupe sort de l'écran

- J'ai fait en sorte qu'une soucoupe apparaisse lorsque on clique sur le bouton #nouvelleSoucoupe

- J'ai fait en sorte que des soucoupes apparaissent automatiquement toutes les 750ms, avec une chance sur deux d'être crées lorsque on clique sur le bouton #flotteSoucoupes

- J'ai mis en place qu'un reclic sur le même bouton #flotteSoucoupes arrête l'apparition de ces soucoupes

- J'ai organisé le code en différentes classes pour que ce soit plus facile à comprendre et à modifier plus tard

### Améliorations possibles : 

* Ajouter un système de vies plutôt que de perdre des points

* Permettre au vaisseau de se déplacer aussi horizontalement

* Ajouter des niveaux de difficulté avec des soucoupes plus rapides que certaines