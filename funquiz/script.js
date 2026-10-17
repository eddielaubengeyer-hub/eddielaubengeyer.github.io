function scoreExam() {

    var score = 0;


    // Question 1

    if(document.getElementById("q1b").checked == true) {

        score = score + 1;

        document.getElementById("question_1_result").innerHTML =
        "Correct";

    }

    else {

        document.getElementById("question_1_result").innerHTML =
        "Incorrect";

    }


    // Question 2

    if(document.getElementById("q2c").checked == true) {

        score = score + 1;

        document.getElementById("question_2_result").innerHTML =
        "Correct";

    }

    else {

        document.getElementById("question_2_result").innerHTML =
        "Incorrect";

    }


    // Question 3

    if(document.getElementById("q3a").checked == true &&
       document.getElementById("q3b").checked == true &&
       document.getElementById("q3c").checked == true &&
       document.getElementById("q3d").checked == false) {

        score = score + 1;

        document.getElementById("question_3_result").innerHTML =
        "Correct";

    }

    else {

        document.getElementById("question_3_result").innerHTML =
        "Incorrect";

    }


    // Question 4

    if(document.getElementById("q4a").checked == true &&
       document.getElementById("q4b").checked == true &&
       document.getElementById("q4c").checked == true &&
       document.getElementById("q4d").checked == false) {

        score = score + 1;

        document.getElementById("question_4_result").innerHTML =
        "Correct";

    }

    else {

        document.getElementById("question_4_result").innerHTML =
        "Incorrect";

    }


    // Total Score

    document.getElementById("final_score").innerHTML =
    "Total Points: " + score;

}