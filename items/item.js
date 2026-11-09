function Item(name, category, brand, year, price) {

    this.name = name;

    this.category = category;

    this.brand = brand;

    this.year = year;

    this.price = price;

    this.displayItem = displayItem;

}



function displayItem() {

    var name_line =
    "<td>" + this.name + "</td>";

    var category_line =
    "<td>" + this.category + "</td>";

    var brand_line =
    "<td>" + this.brand + "</td>";

    var year_line =
    "<td>" + this.year + "</td>";

    var price_line =
    "<td>" + this.price + "</td>";


    var row =
    "<tr>" +
    name_line +
    category_line +
    brand_line +
    year_line +
    price_line +
    "</tr>";


    document.write(row);

}



var items =
[

    new Item(
        "Tacoma PreRunner",
        "Truck",
        "Toyota",
        "2002",
        "$10,000"
    ),

    new Item(
        "4Runner",
        "Truck",
        "Toyota",
        "2005",
        "$9,500"
    ),

    new Item(
        "AR-15",
        "Firearm",
        "Generic",
        "2024",
        "$800"
    ),

    new Item(
        "2.5 Inch Lift Kit",
        "Lift Kit",
        "Rough Country",
        "2026",
        "$500"
    ),

    new Item(
        "3 Inch Lift Kit",
        "Lift Kit",
        "Old Man Emu",
        "2026",
        "$1,200"
    )

];



for(var counter = 0;
    counter < items.length;
    counter++) {


    items[counter].displayItem();


}