/*
let js='good';
if(js=='good'){
    alert("JS is fun");
}
*/
//we should use camelCase for variables

//rules for variables
/*
        1.cannot start with a number.
        2.cannot contain spl char.
        3.can contain _ $.
        4.cannot use keywords.
        5.dont use uppercase as first letter of var.
        6.uppercase are for constants and used fot OOP.
        7.varibales should be descriptive.
    */


//DATA TYPES

//1.PRIMITIVE:
    /*
        1.1 number (all numbers)
        1.2 string ("" '')
        1.3 boolean
        1.4 undefined (int age;)
        1.5 Null
        1.6 symbol (unique value)
        1.7 Big int(for large vlaues)

        **JS is dynamically typed language**
        **typeof(var)**
    */

//declare variables:
    /*
        let: if value may change later
        const: value cannot be changed & we have to initialize
     */



//oper
    /*

    */

//precedence
    /*
        0.()
        1.* /
        2.- +
        3.L to R
        4.comparison(L to R)
        5.ass (R to L) 
    */    

//Coding Challenge #1
/*
const mWeight=78, jWeight=92, mHeight=1.69, jHeight=1.95;
const mBMI=mWeight/(mHeight*mHeight);
const jBMI=jWeight/(jHeight*jHeight);
const result=mBMI>jBMI;
console.log(mBMI,jBMI);
if(result) alert("M has more BMI");
*/


//type conversion: when user want to change type.

//Number(): changes string to numbers.
//String(): changes to string
const inputYear="1991";
const intYear=Number(inputYear);
console.log(intYear);

//type coercion: when JS automatically changes.
console.log(`hey ${inputYear}`);
//+ triggers String fxn
//- * / triggers Number fxn


//falsy values (5): 0, '', undefined, null, NaN.
let height; //initialized to undefined
console.log(height);


//== : do typ corehin , loose equality
//=== : strict equality op , used in real life


