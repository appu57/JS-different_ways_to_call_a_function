//dont use () to call function 
const obj = {
    show:function(){
        console.log("Javascript");
    }
}
"###############################################################################################################################################################"
// METHOD 1 

//USING TAGGED TEMPLATE LITERAL

obj.show ``;  //prints show function of object obj without us using ()

"###############################################################################################################################################################"
//METHOD2


//USING NEW KEYWORD when we invoke a function with new keyword the paranthensis for default function(no parameter function ) becomes optional that allows fuction to be called withou () 

new obj.show;

"###############################################################################################################################################################"


//METHOD3
//COVERT SHOW FUNCTION OF OBJECT TO GET SHOW()

const object = {
    get show(){
        console.log("Javascript");
    }
}
object.show;


"###############################################################################################################################################################"


//Example 1 (Tagged template literal)



const name ="Javascript";
function showLiteral(a,b,c,d){
    console.log("a=",a);//prints 'Hey' 'welcome' because first "a" accepts array of literal
    console.log("b=",b);//prints Javascript
    console.log("JA=",c);//undefined
    console.log("JA=",d);//undefined

}

showLiteral`Hey ${name} , Welcome , to , Javacript`;

//a receives ["Hey ", " , Welcome , ", ""] because it contains the string parts of the template literal.
//b receives "Javascript" because it evaluates the expression ${name}.
//c is undefined because there's no expression for it to evaluate in the template literal.

//But we can also make c and d have values

showLiteral`Hey ${name} , Welcome , ${name} , ${99}`;


//In JavaScript, when you use template literals with tagged template strings, the template literal parts are passed to the tag function as an array of strings. 
//Any expressions within ${} are passed as separate arguments following the array of strings.


//So for "a"  array of strings are a arguement , and remaining expression literal(if any) are passed as an seperate arguement in eg1 only one expression literal was there so b was given that value
//c and d were undefined , if we want assign c and d value we shlld pass expression literal

"###############################################################################################################################################################"