// Default numeric based enum

enum Color { // Default index is 0
}

const myFavColor: Color = Color.Purple;
console.log(myFavColor);

enum StatusCodes { // Fully Initialized Enums
}

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);


// Food enum
enum Food {
}

const MyFoodOrder: Food = Food.Pizza;

if (MyFoodOrder === Food.Pizza) {

    console.log('I ordered Pizza');

} else if (MyFoodOrder === Food.Burger) {

    console.log('I ordered Burger');

} else {

    console.log('I ordered Chips');

}


// Enum strings - Fully Initialized
enum OrderStatus {
}

// Create a variable 'orderStatus' and assign it the value 'OrderStatus.Processing'
let orderStatus: OrderStatus = OrderStatus.Processing;

console.log(orderStatus); // logs "Your order is being processed"