function checkEmail() {


    var email =
    document.getElementById("email").value;


    var confirm =
    document.getElementById("confirm").value;



    // Check to see if email text box is empty


    if(email == "") {

        document.getElementById("email-error").innerHTML =
        "Please fill in this field";

    }

    else {

        document.getElementById("email-error").innerHTML =
        "";

    }



    // Check to see if confirm text box is empty


    if(confirm == "") {

        document.getElementById("confirm-error").innerHTML =
        "Please fill in this field";

    }

    else {

        document.getElementById("confirm-error").innerHTML =
        "";

    }



    // Check if both text boxes have the same value


    if(email != confirm) {

        document.getElementById("email-error").innerHTML =
        "Both emails must be the same";


        document.getElementById("confirm-error").innerHTML =
        "Both emails must be the same";

    }


}



function pizzaOrder() {


    var output = "<h3>Pizza Order ";



    // Radio Buttons


    if(document.getElementById("small").checked == true) {

        output += " Small ";

    }


    else if(document.getElementById("medium").checked == true) {

        output += " Medium ";

    }


    else {

        output += " Large ";

    }



    // Check Boxes


    if(document.getElementById("pepperoni").checked == true) {

        output += " Pepperoni ";

    }


    if(document.getElementById("sausage").checked == true) {

        output += " Sausage ";

    }


    if(document.getElementById("mushrooms").checked == true) {

        output += " Mushrooms ";

    }



    // Output Statement


    document.getElementById("output").innerHTML =
    output + "</h3>";


}