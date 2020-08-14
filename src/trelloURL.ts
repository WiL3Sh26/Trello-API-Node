import * as config from '../config/trelloConfig.json';

export default class TrelloUrl {
    shoppingList : string;

    constructor(){
        this.shoppingList = `https://trello.com/1/lists/${config.board.list.shoppingList}/cards?key=${config.key}&token=${config.token}`;
    }
}
