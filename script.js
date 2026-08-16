let objTest = { prenom: "ahmed", nomDeFamille: "test", age: 20 };

// clé : prenom , valeur : ahmed , propriete : clé + valeur

function ajouterProp(obj, clé) {
  obj[clé] = true;
  return obj;
}

// console.log(ajouterProp(objTest, "hello"));

function supprProp(obj, clé) {
  delete obj[clé];
  return obj;
}
// console.log(supprProp(objTest, "age"));

function ajouterProprieteObjet(obj, clé, obj2) {
  obj[clé] = obj2;
  return obj;
}
console.log(
  ajouterProprieteObjet(objTest, "test", { name: "amine", hello: "hi" }),
);

function ajouterNomComplet(obj) {
  if (obj.prenom && obj.nomDeFamille) {
    obj.nomComplet = obj.prenom + " " + obj.nomDeFamille;
  }
  return obj;
}

// console.log(ajouterNomComplet(objTest));

function ajouterProprieteTbleau(obj, clé, tab) {
  obj[clé] = tab;
  return obj;
}

// console.log(ajouterProprieteTbleau(objTest , "test" , [1 , 2]));

function afficherProps(obj) {
  let tab = Object.values(obj);

  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
}

// function afficherProps(obj) {

//   for (let clé in obj) {

//     console.log( obj[clé]);

//   }
// }

// console.log(afficherProps(objTest));

function supprimerNombresPlusGrandsQue(n, obj) {
  for (let clé in obj) {
    if (typeof obj[clé] === "number" && obj[clé] > n) {
      delete obj[clé];
    }
  }

  return obj;
}

// console.log(supprimerNombresPlusGrandsQue(5 , objTest2));

function supprimerValeursPaires(obj) {
  for (let clé in obj) {
    if (typeof obj[clé] === "number" && obj[clé] % 2 === 0) {
      delete obj[clé];
    }
  }

  return obj;
}

// console.log(supprimerValeursPaires(objTest2));

function supprimerProprietesDifferentesDe10(obj) {
  for (let clé in obj) {
    if (typeof obj[clé] === "number" && obj[clé] !== 10) {
      delete obj[clé];
    }
  }

  return obj;
}

function supprimerChainesPlusLonguesQue(obj, n) {
  for (let clé in obj) {
    if (typeof obj[clé] === "string" && obj[clé].length > n) {
      delete obj[clé];
    }
  }

  return obj;
}

// console.log(supprimerChainesPlusLonguesQue(objTest2 , 3));

function supprimerTousLesNombres(obj) {
  for (let clé in obj) {
    if (typeof obj[clé] === "number") {
      delete obj[clé];
    }
  }

  return obj;
}
// console.log(supprimerTousLesNombres(objTest2));

function supprimerTableaux(obj) {
  for (let clé in obj) {
    if (Array.isArray(obj[clé])) {
      delete obj[clé];
    }
  }

  return obj;
}

let objTest2 = {
  prenom: "ahmed",
  nomDeFamille: "test",
  age: 20,
  test: 3,
  amine: [3, 5],
};

function obtenirPremierElementDePropriete(obj, clé) {
  if (!obj[clé] || !Array.isArray(obj[clé]) || obj[clé].length === 0) {
    return undefined;
  }

  return obj[clé][0];
}

console.log(obtenirPremierElementDePropriete(objTest2, "age"));

function proprieteExiste(obj, clé) {
  return obj.hasOwnProperty(clé);
}

console.log(proprieteExiste(objTest2, "imen"));

function transformerPremierEtDernier(tab) {
  let obj = {};

  obj[tab[0]] = tab[tab.length - 1];
  return obj;
}

console.log(transformerPremierEtDernier(["hello", 5, "test"]));

let obj1 = { name: "amine", hello: "hi", test: "hi", age: 21 };
let obj2 = { name: "amine", test: "hi", age: 21 };

function etendreObjet(obj1, obj2) {
  for (let clé in obj2) {
    if (!obj1.hasOwnProperty(clé)) {
      obj1[clé] = obj2[clé];
    }
  }
  return obj1;
}

console.log(etendreObjet(obj1, obj2));

function compterTousLesCaracteres(chaine) {
  let obj = {};

  if (chaine.length === 0) {
    return obj;
  }

  for (let i = 0; i < chaine.length; i++) {
    if (!obj.hasOwnProperty(chaine[i])) {
        // hasOwnPropery trajaalna true wla false maanha kn lclé yexisiti wala le fl objet
      obj[chaine[i]] = 1;
    } else {
      obj[chaine[i]]++;
    }
  }

  return obj
}

console.log(compterTousLesCaracteres("hello"));





function compterMots(phrase) {
  let obj = {};

  if (phrase.length === 0) {
    return obj;
  }

let tab = phrase.split(" ")

  for (let i = 0; i < tab.length; i++) {
    if (!obj.hasOwnProperty(tab[i])) {
      obj[tab[i]] = 1;
    } else {
      obj[tab[i]]++;
    }
  }

  return obj
}

console.log(compterMots("hello test hello"));


function convertirObjetEnListe (obj) {

let tab = []

for (let key in obj) {


tab.push( [ key , obj[key]] )


}

return tab

}




console.log(convertirObjetEnListe(obj2));

// ["hello" , "test" , "amine"]

// { hello : 3 , test : "manar" , age : 30 }



function  selectionner (tab , obj) {
  let newobj = {}
    
for ( let i = 0 ; i < tab.length ; i++) {
if (obj.hasOwnProperty(tab[i])) {

newobj[tab[i]] = obj[tab[i]]

}


}

return newobj

}

console.log(selectionner(["hello" , "test" , "amine"] ,{ hello : 3 , test : "manar" , age : 30 } ));
