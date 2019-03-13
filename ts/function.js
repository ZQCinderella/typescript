// 如果参数为可选参数，则一定要放到最后
function add(x, y) {
    if (y)
        return x + y;
    return x;
}
// 如果提供了默认参数，则不必放到最后。但是在调用时，如果使用默认参数，就必须传入undefined
// y不用指定类型，y的类型会根据默认值的类型确定
function mult(y, x) {
    if (y === void 0) { y = 10; }
    if (y)
        return x * y;
    return x;
}
mult(undefined, 20);
// 剩余参数的处理
function buildName(firstName) {
    var restName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restName.join(' ');
}
console.log(buildName('bob', 'jerry', 'tom'));
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
