

let name;
let country;

let nameChanged = document.querySelector("#nameChanged");
let countryChange = document.querySelector("#countryChange");

let p = document.getElementById("output");

nameChanged.addEventListener("change", function(){
    name= event.target.value;
    changeInput();
})

countryChange.addEventListener("change", function() {
    country= event.target.value;
    changeInput();
})

const changeInput = function(){
        const text = `Je heet ${name} en je komt uit ${country}`; 
        p.textContent = text;
        
    }

