// document.getElementById('checkout-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     //check the value of age input field
//     const age = document.getElementById('age').value;
//     if (age < 18) {
//         alert('You must be at least 18 years old to proceed with the checkout.');
//         return; // Stop the form submission
//     }
//     else{
//         alert('Form submitted successfully!');
//     }
// });
// let score = 85;
//if else if else statement
function controlFlow(score){

    if(score >= 90){
        console.log('A');
    } else if(score >= 70){
         console.log('B');
    }
    else if(score>=60){
         console.log('C');
    } 
    else if(score>=50){
         console.log('D');
    } 
    else{
         console.log('Fail');
    }

}

//switch case statement

function switchCase(grade){
    switch(true){
        case (grade >= 90):
            console.log('A');
            break;
        case (grade >= 70):
            console.log('B');
            break;
        case (grade >= 60):
            console.log('C');
            break;     
        case (grade >= 50):
            console.log('D');
            break;     
        default:
            console.log('Fail');
    }
}

//ternary operator
let age = 20;
let eligibility = (age >= 18) ? 'Eligible to vote' : 'Not eligible to vote';
// console.log(eligibility);

//looping statements
//for loop
for(let i=0; i<=5; i+=2){
    // console.log('For Loop iteration: ' + i);
}

//while loop
let j = 0;
while(j<=5){
    console.log('While Loop iteration: ' + j);
    j++;
}

//do while loop
let k = 0;
do{
    console.log('Do While Loop iteration: ' + k);
    k++;
}while(k<=5);

// switchCase(50); 
// controlFlow(50);