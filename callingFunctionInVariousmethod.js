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