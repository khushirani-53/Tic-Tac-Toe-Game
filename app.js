let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turno=true;

let winpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,,5],
[6,7,8]];

const resetgame= () => {
    turno=true;
    enabledboxs();
    msgcontainer.classList.add("hide");
};
boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turno){
         box.innerText="o";
         turno=false;
        }else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;

        checkwinnner();
    });
});
const disabledboxs=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
};
const enabledboxs=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxs();
};

const checkwinnner=()=>{
    for (let pattern of winpatterns){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val ){
                showWinner(pos1val);
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);