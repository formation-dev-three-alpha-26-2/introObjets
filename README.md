# introObjets

# Exercices – Objets


---

## Basic

### 1. Corriger les erreurs de syntaxe et de style dans les trois objets suivants :

* Objet 1 :
  `{firstName 'Yan', lastname: 'Fan'}`

* Objet 2 :
  `{a: 1, b:2 c: 3 d 4}`

* Objet 3 :

  ```js
  { 
    animal: 'dog' 
    noise: 'bark', 
    age: 3, 
    type 'Golden Retriever' 
    color: 'Yellow', 
  }
  ```

---

### 2. Créer un objet qui te représente.

Il doit contenir :

* ton prénom
* ton nom
* ton âge
* ta ville natale
* nourriturePréférée

Assigne-le à une variable appelée **personne**.

---

### 3. Accéder à la propriété `nourriturePréférée` dans l’objet en utilisant la notation avec le point (dot notation), puis la modifier pour une autre nourriture.

---

### 4. Modifier ton objet pour qu’il ait une seule clé `nom`, dont la valeur est un objet contenant :

* `prenom`
* `deuxiemePrenom`
* `nomDeFamille`

---

### 5. Écrire une fonction appelée `objetVide` qui ne prend aucun paramètre et retourne un objet vide.

---

### 6. Écrire une fonction appelée `ajouterPropriete` qui prend deux paramètres :

* un objet
* une clé

Elle ajoute cette clé à l’objet avec la valeur `true`.

---

### 7. Écrire une fonction appelée `supprimerPropriete` qui prend deux paramètres :

* un objet
* une clé

Elle supprime la propriété correspondant à cette clé.

---

### 8. Écrire une fonction appelée `ajouterProprieteObjet` qui prend trois paramètres :

* un premier objet
* une clé
* un deuxième objet

Elle ajoute une nouvelle propriété dans le premier objet avec la clé donnée et comme valeur le deuxième objet.

---

### 9. Écrire une fonction appelée `ajouterNomComplet` qui prend un objet en paramètre.

Si l’objet possède à la fois les propriétés `prenom` et `nomDeFamille`, elle ajoute une nouvelle propriété `nomComplet` contenant :
`prenom + " " + nomDeFamille`.

---

### 10. Écrire une fonction appelée `ajouterProprieteTableau` qui prend trois paramètres :

* un objet
* une clé
* un tableau

Elle ajoute une propriété à l’objet avec cette clé et comme valeur le tableau.

---

### 11. Écrire une fonction appelée `afficherToutesLesProprietes` qui prend un objet en paramètre.

Elle affiche dans la console les valeurs de toutes les propriétés de l’objet.

---

## Plus de pratique


### 1. `supprimerNombresPlusGrandsQue`

Écrire une fonction qui prend :

* un nombre
* un objet

Elle supprime toutes les propriétés dont la valeur est un nombre plus grand que le nombre donné.

---

### 2. `supprimerValeursPaires`

Écrire une fonction qui prend un objet et supprime toutes les propriétés dont la valeur est un nombre pair.

---

### 3. `supprimerProprietesDifferentesDe10`

Écrire une fonction qui prend un objet et supprime toutes les propriétés dont la valeur n’est pas égale à 10.

---

### 4. `supprimerChainesPlusLonguesQue`

Écrire une fonction qui prend :

* un nombre
* un objet

Elle supprime toutes les chaînes de caractères dont la longueur est supérieure au nombre donné.

---

### 5. `supprimerTousLesNombres`

Écrire une fonction qui prend un objet et supprime toutes les propriétés dont la valeur est un nombre.

---

### 6. `supprimerTableaux`

Écrire une fonction qui prend un objet et supprime toutes les propriétés dont la valeur est un tableau.

---

### 7. `obtenirPremierElementDePropriete`

Écrire une fonction qui prend :

* un objet
* une clé

Elle retourne le premier élément du tableau correspondant à cette clé.

Conditions :

* si le tableau est vide → retourner `undefined`
* si la valeur n’est pas un tableau → retourner `undefined`
* si la clé n’existe pas → retourner `undefined`

---

### 8. `obtenirNemeElementDePropriete`

Écrire une fonction qui prend :

* un objet
* une clé
* un nombre

Elle retourne l’élément situé à l’index donné dans le tableau correspondant à la clé.

---

## Avancé 

### 1. `proprieteExiste`

Écrire une fonction qui prend :

* un objet
* une clé

Elle retourne `true` si la propriété existe, sinon `false`.

---

### 2. `obtenirToutesLesCles`

Écrire une fonction qui prend un objet et retourne un tableau contenant toutes ses clés.

Indice : utiliser `Object.keys()`

---

### 3. `obtenirToutesLesValeurs`

Écrire une fonction qui prend un objet et retourne un tableau contenant toutes ses valeurs.

Indice : utiliser `Object.values()`

---

### 4. `transformerPremierEtDernier`

Écrire une fonction qui prend un tableau et retourne un objet où :

* le premier élément devient la clé
* le dernier élément devient la valeur

---

### 5. `etendreObjet`

Écrire une fonction qui prend deux objets.
Elle ajoute les propriétés du deuxième objet au premier uniquement si la clé n’existe pas déjà.

---

### 6. `compterTousLesCaracteres`

Écrire une fonction qui prend une chaîne de caractères et retourne un objet où :

* chaque caractère est une clé
* sa valeur est le nombre de fois qu’il apparaît

Si la chaîne est vide, retourner un objet vide.

---

### 7. `compterMots`

Écrire une fonction qui prend une phrase et retourne un objet où :

* chaque mot est une clé
* sa valeur est le nombre d’occurrences

Si la chaîne est vide, retourner un objet vide.

---

### 8. `convertirObjetEnListe`

Écrire une fonction qui prend un objet et retourne un tableau de tableaux sous la forme :
`[clé, valeur]`.

---

### 9. `selectionner`

Écrire une fonction qui prend :

* un tableau de clés
* un objet

Elle retourne un nouvel objet contenant uniquement les propriétés dont les clés sont présentes dans le tableau.

---
