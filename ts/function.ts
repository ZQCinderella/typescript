
// 如果参数为可选参数，则一定要放到最后
function add (x: number, y?: number): any {
    if (y) return x + y;
    return x;
}

// 如果提供了默认参数，则不必放到最后。但是在调用时，如果使用默认参数，就必须传入undefined
// y不用指定类型，y的类型会根据默认值的类型确定
function mult (y = 10, x: number): any {
    if (y) return x * y;
    return x;
}
mult(undefined, 20)


// 剩余参数的处理
function buildName(firstName: string, ...restName: string[]) {
    return firstName + " " + restName.join(' ')
}
console.log(buildName('bob', 'jerry', 'tom'));


interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);