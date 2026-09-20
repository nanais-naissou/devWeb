# TP 5 : projet 2 "React"

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp5` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).

  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

### Informations personnelles

- **Nom** : BELAL  
- **Prénom** : DAMYA  
- **Numéro Étudiant** : 42322464  
- **Niveau** : L2 INFORMATIQUE  
- **Groupe** : 7  

---

### Comment exécuter le projet

Avant de lancer l'application, j'ai installé les dépendances nécessaires avec :

- `npm install`

Ensuite, pour lancer l’application en mode développement (et voir les modifications en direct) :

- `npm run dev-server`

Et pour créer une version optimisée du projet :

- `npm run build`

---

### Description générale

Ce projet est une application React pour gérer des tâches, un peu comme une to-do list. Elle permet d’ajouter des tâches, de définir leur durée et leur priorité, de les marquer comme terminées, et de voir la liste des tâches faites

J’ai séparé les différentes parties de l’application en **composants React** pour que ce soit plus clair, plus organisé et plus facile à modifier plus tard

---

### Explication des composants

#### 1. **App**
C’est le composant principal. C’est lui qui regroupe tous les autres. Il gère deux listes :
- les tâches à faire
- les tâches faites

Il utilise **useState** pour stocker ces listes, et **useEffect** pour initialiser certaines données comme la priorité par défaut

---

#### 2. **AddTask**
Ce composant permet d’ajouter une nouvelle tâche
Il contient deux champs : une description et une durée  
Quand je clique sur le bouton, la tâche est ajoutée à la liste des tâches à faire  
Ce composant utilise aussi **useState** pour stocker temporairement ce que je tape dans les champs

---

#### 3. **ToDo**
Ce composant affiche toutes les tâches à faire 
Il a aussi une **barre de recherche** pour filtrer les tâches par mot-clé 
Il trie les tâches selon leur priorité (les plus urgentes en haut) 
Pour chaque tâche affichée, il utilise le composant **Task**

---

#### 4. **Done**
Ce composant affiche toutes les tâches qui sont terminées  
Il utilise le composant **DoneTask** pour afficher chaque tâche faite

---

#### 5. **Task**
Ce composant représente une seule tâche  
Il montre sa description, sa durée, sa priorité et un bouton pour la marquer comme faite  
Il utilise un autre composant (PriorityScale) pour gérer la priorité, et un autre (DoneButton) pour marquer la tâche comme terminée

---

#### 6. **DoneTask**
Ce composant sert juste à afficher une tâche terminée 
Il montre la description et la durée, sans bouton ni priorité

---

#### 7. **PriorityScale**
C’est une échelle de 1 à 6 pour afficher ou modifier la priorité d’une tâche  
Elle contient plusieurs **PriorityLevel** (petits blocs cliquables)  
Quand je clique sur un niveau, la priorité de la tâche est mise à jour

---

#### 8. **PriorityLevel**
Ce composant représente un seul niveau dans l’échelle de priorité  
Il change de couleur selon si la priorité est activée ou non  
Il réagit au clic pour mettre à jour la priorité

---

#### 9. **DoneButton**
C’est un petit bouton avec un ✔ qui permet de marquer une tâche comme terminée  
Quand on clique dessus, la tâche passe dans la liste des tâches faites

---

### Les hooks React

- **useState** : je l’utilise dans presque tous les composants pour gérer l’état (par exemple : la liste des tâches, la description d’une nouvelle tâche, la recherche...)

- **useEffect** : je l’ai utilisé dans `App` pour ajouter une priorité par défaut aux tâches quand l’application démarre

---

### Gestion des priorités

Chaque tâche a un niveau de priorité entre 1 (peu important) et 6 (très important)  
Je peux cliquer sur les blocs de couleur pour changer la priorité d’une tâche 
Les tâches sont ensuite triées dans l’ordre des priorités : les plus urgentes en haut

---

### Ce que j’ai appris

Grâce à ce projet, j’ai appris à :

- utiliser `useState` pour gérer les données dans React
- utiliser `useEffect` pour faire des actions au démarrage
- organiser un projet en plusieurs petits composants
- gérer les événements (clics, champs de texte, etc.)
- structurer une interface claire et dynamique

---

### Actions non réalisés / Améliorations possibles

- **Ajouter un compteur de tâches réalisées**
- **Permettre de replier et déplier la section des tâches terminées**
- Supprimer une tâche
- Ajouter une date limite
- Afficher un message quand toutes les tâches sont terminées

---

### Conclusion

Je suis satisfaite de mon projet, il fonctionne bien et j’ai appris beaucoup de choses sur React 
c’était aussi un bon projet pour mieux comprendre comment organiser un code propre et structuré
