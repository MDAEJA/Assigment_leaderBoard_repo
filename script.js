const submitButton = document.querySelector(".button");
console.log(submitButton);
let indx = 0;
let studentdata = [];

// studentdata.sort((p1,p2)=> parseInt(p2.sc) - parseInt(p1.sc));

submitButton.addEventListener("click",displayResult);

function displayResult(event){
   event.preventDefault();
   indx++;
   
    const firstname = document.querySelector("#first-name").value;
    const lastname = document.querySelector("#last-name").value;
    const score = document.querySelector("#score").value;
    const country = document.querySelector("#country").value;
    const currentDate = new Date();
    if(firstname === "" || lastname === "" || score === "" || country === "" ) return alert("please enter all fields");
    let studentobj = ({id : indx, fname : firstname, lname : lastname, sc : score, nation :country, date :currentDate});
   studentdata.push(studentobj);
   studentdata.sort((p1,p2)=> parseInt(p2.sc) - parseInt(p1.sc));
   console.log(studentobj);

const studentlist = document.querySelector(".studentList");

studentlist.innerHTML = "";
studentdata.forEach((ele)=>{
    const div = document.createElement("div");
    div.classList.add("div");
    const date = Date().value
    div.innerHTML = `<div class="name"><p>${ele.fname} ${ele.lname}</p>
    <span>${ele.date}</span></div>
     <div class="name"><p>${ele.sc}<p></div>
      <div class="name">delete</div> 
      <div class="increment" >Increment +</div> 
      <div class="decrement" >Decrement -</div>`
      studentlist.append(div);
       console.log(div.children);
    //    for increment player score
       div.children[3].addEventListener("click",(()=>{
         ele.sc = parseInt(ele.sc) + 5;
          if(ele.sc > 100)  return alert("Player score not above 100");
          
         //  arranged(ele.sc);
        div.children[1].innerText = ele.sc;
   //  studentdata.sort((p1,p2)=> parseInt(p2.sc) - parseInt(p1.sc));


       }));
    // for decrement player score
       div.children[4].addEventListener("click",(()=>{
             
        let incrValue = div.children[1].innerText ;
        incrValue =  parseInt(incrValue) - 5;
        
          if(incrValue < 0)  return alert("Player score not below 0");
        div.children[1].innerText = incrValue;
        ele.sc = incrValue;
        studentdata.sort((p1,p2)=> parseInt(p2.sc) - parseInt(p1.sc));
        console.log(ele.sc);
            }));
// delete the particular div;
        div.children[2].addEventListener("click",(()=>{
             div.remove();
                    }))
});
};
function arranged(scr){
   studentdata.sort((a,b)=>{
     return parseInt(scr.b) - parseInt(scr.a);
   })
};








