// Default numeric based enum
var Color;
(function (Color) {
})(Color || (Color = {}));
var myFavColor = Color.Purple;
console.log(myFavColor);
var StatusCodes;
(function (StatusCodes) {
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// Food enum
var Food;
(function (Food) {
})(Food || (Food = {}));
var MyFoodOrder = Food.Pizza;
if (MyFoodOrder === Food.Pizza) {
    console.log('I ordered Pizza');
}
else if (MyFoodOrder === Food.Burger) {
    console.log('I ordered Burger');
}
else {
    console.log('I ordered Chips');
}
// Enum strings - Fully Initialized
var OrderStatus;
(function (OrderStatus) {
})(OrderStatus || (OrderStatus = {}));
// Create a variable 'orderStatus' and assign it the value 'OrderStatus.Processing'
var orderStatus = OrderStatus.Processing;
console.log(orderStatus); // logs "Your order is being processed"
