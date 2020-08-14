import fetch from 'node-fetch';
import TrelloUrl from './trelloURL';
import Card from './models/card';

async function getShoppingList() :Promise<any> {
    const trello = new TrelloUrl();

    console.log(trello);

    return await fetch(trello.shoppingList,{
        method:"GET"
    })
        .then(res => {
            console.log(
                `Response: ${res.status} ${res.statusText}`
            );
            return res.json();
        })
        .catch(err => { return err;});
}

getShoppingList().then(data => {
    let cardAry = [];
    for (let i = 0; i < data.length; i++) {
        const card = new Card(data[i]);
        cardAry.push(card);
    }
    console.log(cardAry);
})
