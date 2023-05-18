let allWorkers = [];


let WorkersIndex = -1;

function addWorkers(){
    let Workname = document.getElementById("work-name").value;
    let Workid = document.getElementById("work-id").value;
    let Workposition = document.getElementById("work-position").value;
    let Worksalary = document.getElementById("work-salary").value;

// console.log(Workname);
// console.log(Workid);
// console.log(Workposition);
// console.log(Worksalary);


    document.getElementById("work-name").value = "";
    document.getElementById("work-id").value = "";
    document.getElementById("work-position").value = "";
    document.getElementById("work-salary").value = "";


    let NewWorker = {
        name: Workname,
        id: Workid,
        position: Workposition,
        salary: Worksalary
    };

    console.log(allWorkers);

    drawWorkers();


    if(WorkersIndex>=0){
        allWorkers[WorkersIndex] = NewWorker;
        WorkersIndex = -1;
        document.getElementById("btn").textContent = "Create";
        document.getElementById("btn").style.background = "";
    }else{
        allWorkers.push(NewWorker);
    }

    console.log(allWorkers);

    drawWorkers();

}

function drawWorkers(){
    let result = "";

    for(let i = 0; i<allWorkers.length; i++){
        result+= `
        <tr>
        <td>${allWorkers[i].id}</td>
        <td>${allWorkers[i].name}</td>
        <td>${allWorkers[i].position}</td>
        <td>${allWorkers[i].salary}</td>
        <td>
        <button class="btn" onclick="EditWorkers(${i})"><img class="img" src="./images/photo_2022-02-24_20-39-11 (2).jpg" alt=""></button>
        </td>
        <td>
        <button onclick="DeleteWorkers(${i})"  class="btn"  ><img class="img1" src="./images/photo_2022-02-24_20-39-11.jpg" alt=""></button>

        </td>
        </tr>
        `


    }
    document.getElementById("natija").innerHTML = result;
}


function DeleteWorkers(index){
    allWorkers.splice(index,1);
    drawWorkers();
}


function EditWorkers(index){
    document.getElementById("work-name").value = allWorkers[index].name;
    document.getElementById("work-id").value = allWorkers[index].id;
    document.getElementById("work-position").value = allWorkers[index].position;
    document.getElementById("work-salary").value = allWorkers[index].salary;


    WorkersIndex = index;

    document.getElementById("btn").textContent = "Change";
    document.getElementById("btn").style.background = "purple";
}


function DeleteAllWorkers(){
    allWorkers = [];
    drawWorkers();
}