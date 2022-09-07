const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){//function interna (funcion dentro de funcion es clousere)
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }

        return child();

    }

    return parent();

}

myFunction();

//Closure, ámbito léxico
