function logStatus(e){
    var currentValue = e.target.value;

    if(currentValue == "Login"){
        console.log(currentValue);
        e.target.value = "Logout";
    }else if(currentValue == "Logout"){
        e.target.value = "Login";
    }
}

function removeElement(e){
    e.target.classList.add('hide');
}

function like(e){
    // sets visual that you liked the definition
    var thumbs = '<i class="fas fa-thumbs-up"></i>';
    e.target.innerHTML += thumbs;
    setTimeout(function(){
        e.target.querySelector(".fa-thumbs-up").remove();
    },3000);

    //++1 visual like 
    var likeElement = e.target.querySelector('.num');
    var likeNumber = parseInt(likeElement.innerHTML)+ 1;
    likeElement.innerHTML = likeNumber;

    // alert("Horray you have a like!");
}