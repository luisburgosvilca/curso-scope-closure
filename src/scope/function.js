//function scope o local scope

function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName==='Ana'){//triple igualdad: iguala valor y tipo
        console.log(`Hello ${userName} !`);//`: handels bar
    }
}

greeting();
//ambito léxico