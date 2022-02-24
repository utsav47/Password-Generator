function Generator(){
    const elementSelector = document.getElementById("range");
    let selectedChars = toggleSelected();
    let length = elementSelector.value;
    let pass = "";
    elementSelector.addEventListener('change', () => {
        length = elementSelector.value;
        document.getElementsByClassName("password_length")[0].innerHTML = "Length: " + length;
        //console.log(length);

    });
    //console.log(length);
    //console.log(typeof length);

    

    //console.log(lowerCase);
    //console.log(upperCase);
    //console.log(numbers);
    //console.log(symbols);
    

    //console.log("Hiiii" + toggleSelected());


    document.getElementById("upperCase").addEventListener('change',() =>{
        selectedChars = toggleSelected();
        //console.log(selectedChars);
    });
    document.getElementById("lowerCase").addEventListener('change',() =>{
        selectedChars = toggleSelected();
        //console.log(selectedChars);
    });
    document.getElementById("numbers").addEventListener('change',() =>{
        selectedChars = toggleSelected();
        //console.log(selectedChars);
    });
    document.getElementById("symbols").addEventListener('change',() =>{
        selectedChars = toggleSelected();
        //console.log(selectedChars);
    });
    
    //console.log(selectedChars);

    document.getElementById("generate_password").addEventListener('click',() =>{
        //selectedChars = toggleSelected();
        pass = randomizer(length, selectedChars);
        console.log(pass);
        document.getElementsByClassName("generated_password")[0].innerHTML = "Password: " + pass;
    });


}

function toggleSelected(){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    let allElements = "";

    //console.log(allElemts);

    if(document.getElementById("upperCase").checked == true){
        allElements += upperCase;

    }
    if(document.getElementById("lowerCase").checked == true){
        allElements += lowerCase;
    }
    if(document.getElementById("numbers").checked == true){
        allElements += numbers;

    }
    if(document.getElementById("symbols").checked == true){
        allElements += symbols;
    }
    if(allElements == ""){
        console.log("Nothing selected");
    }

    return allElements;

}

function randomizer(length, selectedChars){
    length = parseInt(length);
    let password = "";
    let strLength = selectedChars.length;
    let random_number;// = Math.floor(Math.random()*strLength);
    for(let i = 0; i< length; i++){
        random_number = Math.floor(Math.random()*strLength);
        password += selectedChars.charAt(random_number);

    }
    return password;
}

Generator();