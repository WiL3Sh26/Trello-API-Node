export default class Card {
    id?: string;
    name?: string;

    constructor(card: Partial<Card>) {
        this.id = card.id;
        this.name = card.name;
    }

}