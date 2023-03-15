//creiamo la shopping list
const shoppingList = [
    'mele',
    'pere',
    'arance',
    'limoni',
    'uova'
]

//prendiamo la ul dalla dom
const ul = document.getElementById('list')
console.log(ul);

//creiamo un ciclo while col quale aggiungiamo i list item
let i = 0
while (i < shoppingList.length) {
    console.log(shoppingList[i]);
    //creiamo l'elemento li alla lista
    let li = document.createElement('li');
    //creiamo e appendiamo nell'li il contenuto dell elemento i della lista
    li.append(document.createTextNode(shoppingList[i]));
    //appendiamo all'ul l'li appena creato
    ul.append(li)

    //++ per aumentare l'indice
    i++
}

