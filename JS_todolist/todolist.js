var btn = document.getElementById("btn");
btn.addEventListener("click", add, false);
function add(e) {
    var task = document.getElementById("task");
    var date = document.getElementById("date");
    var newtask = document.createElement("li"); 
    newtask.innerText = date.value + " " + task.value;
  
    var tasks = document.getElementById("tasks");
    tasks.appendChild(newtask);
}
tasks.addEventListener("dblclick", function(e) {
    e.remove;
}, false);








/*


var stroka = document.getElementById("post");
var masuv = [];
document.getElementById("demo").innerHTML = masuv;
masuv.push(stroka);

var Line = document.getElementById("post");


var allTasks = [];
var btn = document.getElementById("btnAdd");
btn.addEventListener("click", function(e) {
   
    if (!allTasks.includes(task.value)){  
    var newLi = document.createElement("li");
    newLi.innerText = task.value;})
    
    newLi.addEventListener("click", function(e){
        e.target.style.backgroundColor = "yellow"; 
    }, false);

    newLi.addEventListener("dblclick", function(e){
        e.target.remove
    })

    tasks.appendChild(newLi);
    allTasks.push(task.value);
}
false;
} 

) */