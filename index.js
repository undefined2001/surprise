let add = document.getElementById("add");
let out = document.getElementById("output")
let friends = ["RIFAT", "TAMIM", "REDWAN"]
add.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    if(name.toUpperCase() in friends){
           out.innerHTML = `<h1>FUCK YOU</h1>
    <h1 class="name">${name.toUpperCase()}</h1>
    ` ;
   
    }else if(name != ""){
    out.innerHTML = `
    <h1>I LOVE YOU</h1>
    <h1 class="name">${name.toUpperCase()}</h1>
    ` ;
    }
    else{
        out.innerHTML =""
    }
    
});
