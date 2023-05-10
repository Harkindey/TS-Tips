export const  myObj: Record<string, string[]> ={} 

// if key doesnt exist we want to create an empty array
if(!myObj.foo){
    myObj.foo = [];
}

myObj.foo.push("bar")