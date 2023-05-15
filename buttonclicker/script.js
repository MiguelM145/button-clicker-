function logout(element){

    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login"
    }
}

function hide(def){
    def.remove(); 
}