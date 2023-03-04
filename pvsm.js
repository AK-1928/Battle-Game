const person=document.getElementById("p-value");
const monster=document.getElementById("m-value");

function OnclickAttack(){
    let a=person.value;
    let b=monster.value;
    a=a-15;
    b=b-10;
    person.value=a;
    monster.value=b;
    if(a<=0){
        alert("Solider defeated");
    }
    else if(b<=0){
        alert("Solider Won the Battle");
    }
}

function OnclickDoubleAttack(){
    let a=person.value;
    let b=monster.value;
    a=a-20;
    b=b-15;
    person.value=a;
    monster.value=b;
    if(a<=0){
        alert("Solider defeated");
    }
    else if(b<=0){
        alert("Solider Won the Battle");
    }
}

function OnclickSelfHeal(){
    let heal=50;
    let a=person.value;
    if(a+heal>100){
        a=90;
    }
    else{
        a=a+heal;
    }
    person.value=a;
}