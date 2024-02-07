const paragraph = document.querySelector('p');
function highlight() {
    //Write your code here
    console.log("test")
const boldElements = document.getElementsByTagName('strong');
console.log(boldElements);
    // Change the color of bold elements to green
    for(let i=0;i<boldElements.length;i++)
    {
        console.log(boldElements[i]);
        boldElements[i].style.color="rgb(0,128,0)"
    }

}


function return_normal() {
    //Write your code here
 const boldElements = document.getElementsByTagName('strong');
        // Change the color of bold elements to green
        for(let i=0;i<boldElements.length;i++)
        {
            console.log(boldElements[i]);
            boldElements[i].style.color="rgb(0,0,0)"
        }
    
    
}

let text=document.getElementById("text");
let edit=document.getElementById("edit");
edit.addEventListener("click",(e)=>{
    // e.target.parentElement.remove()
    let label=document.createElement("label");
   label.setAttribute("for","editbtn");
    label.innerText="complete"
   let editbn= document.createElement("input")
   
   editbn.id="editbtn";
 editbn.type="checkbox"
 editbn.addEventListener("click",()=>{
    console.log(editbn.checked);
    if(editbn.checked===true)
    {
        label.innerText="completed";
        edit.remove();
    }
 })
editbn.placeholder="complete"
console.log(editbn.value);
 text.append(label,editbn);
})