
function countTip (percent){
    const bill = document.querySelector(".inputBill").value;
    const peopleNum = document.querySelector('.inputPeople').value ;

    //error
    if(peopleNum < 1){
        p = document.querySelector(".error");
        p.textContent = "Can't be zero";
        inp = document.querySelector(".inputPeople").style.borderColor ="red";
        return

    }
    //remove errors if function reruns correctly
    p = document.querySelector(".error");
    p.textContent = "";
    inp = document.querySelector(".inputPeople").style.borderColor ="var(--clr-very-light-gray)";
    
    let tipPercent = percent;
    if(tipPercent == undefined){  
    tipPercent = document.querySelector('.customTip').value;}

    const tipByPerson = document.querySelector("#tipByPerson");
    const priceByPerson = document.querySelector("#priceByPerson");
 
    let tipAmount = bill / 100 * tipPercent;
    let priceForPerson  = bill / peopleNum;

    tipAmount = Math.round(tipAmount * 100) / 100;
    priceForPerson = Math.round(priceForPerson * 100) / 100;

    tipByPerson.textContent = "$" + tipAmount ;
    priceByPerson.textContent = "$" + priceForPerson;
}
function resetPage(){ //resets everything that isnt reseted by reset button
    p = document.querySelector(".error");
    p.textContent = "";
    inp = document.querySelector(".inputPeople").style.borderColor ="var(--clr-very-light-gray)";    
    
    const herti = document.querySelector("#tipByPerson");
    const hori = document.querySelector("#priceByPerson");
    herti.textContent = "$0.00";
    hori.textContent = "$0.00";
}
