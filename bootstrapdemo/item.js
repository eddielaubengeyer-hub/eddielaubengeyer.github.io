function Item(id, name, price) {

    this.id = id;

    this.name = name;

    this.price = price;

}



var items = [];


items[0] =
new Item(
    1,
    "Necro Spell Book",
    49.99
);


items[1] =
new Item(
    2,
    "Scrying Ball Planter",
    99
);


items[2] =
new Item(
    3,
    "Mandrake Root",
    14.99
);


items[3] =
new Item(
    4,
    "Tarot Cards",
    49.99
);


items[4] =
new Item(
    5,
    "Ouija Board",
    99
);


items[5] =
new Item(
    6,
    "Scrying Mirror",
    14.99
);



function updateCheckout() {

    document.getElementById("cart-link").innerHTML =
    "Checkout (" +
    sessionStorage.length +
    ")";

}



function getID(arg) {

    var counter = 0;


    while(items[counter].name != arg) {

        counter++;

    }


    return items[counter].id;

}



function add(arg) {

    sessionStorage.setItem(
        items[arg].name,
        items[arg].price
    );


    updateCheckout();

}



function remove(arg) {

    sessionStorage.removeItem(arg);

    displayCart();

    updateCheckout();

}



function displayCart() {

    var total = 0;


    var output =
    "<table class='table table-hover'>";


    if(sessionStorage.length == 0) {


        document.getElementById("cart").innerHTML =
        "<h3>Cart is Empty!</h3>";


        document.getElementById("total").innerHTML =
        "<h3>Total: $0.00</h3>";


    }


    else {


        output +=
        "<tr>" +
        "<th>Image</th>" +
        "<th>Name</th>" +
        "<th>Price</th>" +
        "<th>Delete</th>" +
        "</tr>";



        for(var x = 0;
            x < sessionStorage.length;
            x++) {


            var key =
            sessionStorage.key(x);



            output +=
            "<tr>";


            output +=
            "<td>" +
            "<img src='images/image" +
            getID(key) +
            ".jpg' width='50px' height='50px'>" +
            "</td>";


            output +=
            "<td>" +
            key +
            "</td>";


            output +=
            "<td>$" +
            sessionStorage.getItem(key) +
            "</td>";


            output +=
            "<td>" +
            "<input type='button' " +
            "class='btn btn-primary' " +
            "value='Delete' " +
            "onclick=\"remove('" +
            key +
            "')\">" +
            "</td>";


            output +=
            "</tr>";



            total +=
            parseFloat(
                sessionStorage.getItem(key)
            );


        }



        output +=
        "</table>";



        document.getElementById("cart").innerHTML =
        output;


        document.getElementById("total").innerHTML =
        "<h3>Total: $" +
        total.toFixed(2) +
        "</h3>";


    }


}