function greating(){
    let username = `Luis`;

    function displayUserName(){
        return `Hello ${username}`;
    }

    return displayUserName;
}

const g = greating();
console.log(g);
console.log(g());