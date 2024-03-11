const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");

let notes=document.querySelectorAll(".input-box");


function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

function updateNotes() {
    localStorage.setItem("notes",notesContainer.innerHTML);


}
showNotes();
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateNotes();
    }
    else if(e.target.tagName==="p"){
        notes.document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onKeyup=function(){
                updateNotes();
            }
        })
    }
}) 


document.addEventListener("keydown",event=>{
    if (event.key === "Enter" ){
document.execCommand("insertLineBreak");
event.preventDefault();
    }
})