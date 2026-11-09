function Employee(name, title, phone) {

    this.name = name;

    this.title = title;

    this.phone = phone;

    this.printEmployee = printEmployee;

}



function printEmployee() {

    var name_line =
    "<td>" + this.name + "</td>";

    var title_line =
    "<td>" + this.title + "</td>";

    var phone_line =
    "<td>" + this.phone + "</td>";


    var row =
    "<tr>" +
    name_line +
    title_line +
    phone_line +
    "</tr>";


    document.write(row);

}



var Nick =
new Employee(
    "Nick",
    "Instructor",
    "956 872 3445"
);


var Lisa =
new Employee(
    "Lisa Simpson",
    "Teacher",
    "956 333 1111"
);


var Mike =
new Employee(
    "Mike Tyson",
    "Boxer",
    "956 787 2222"
);



/*

Nick.printEmployee();

Lisa.printEmployee();

Mike.printEmployee();

*/



var emp_array =
[
    Nick.name,
    Lisa.name,
    Mike.name
];



emp_array =
emp_array.sort();



for(var counter = 0;
    counter < emp_array.length;
    counter++) {


    document.write(
        emp_array[counter] +
        "<br>"
    );


}