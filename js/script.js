let submitBtn = document.getElementById('button-addon2')
let inputArea = document.getElementById('task-input').value

function addTask() {
    let li = document.createElement('li')
    let liDiv = document.createElement('div')
    let btnCheck = document.createElement('button')
    let btnCross = document.createElement('button')
    let iconCheck = document.createElement('i')
    let iconCross = document.createElement('i')

    let input = document.getElementById('task-input').value;
    let text = document.createTextNode(input);
    
   
    if (input === '') {
        alert("You must write something!");
    } else {
        document.getElementById('task-ul').appendChild(li);
        li.appendChild(text);
        li.appendChild(liDiv);
        liDiv.appendChild(btnCheck) + liDiv.appendChild(btnCross);
        btnCheck.appendChild(iconCheck);
        btnCross.appendChild(iconCross);
    }

    function addId() {
        li.classList.add('list-group-item');
        li.setAttribute('id', 'task-li');
        liDiv.classList.add('task-buttons');
        liDiv.setAttribute('id', 'task-div');
        btnCheck.classList.add('btn', 'btn-outline-success');
        btnCheck.setAttribute('type', 'button');
        btnCross.classList.add('btn', 'btn-outline-danger');
        btnCross.setAttribute('type', 'button');
        iconCheck.classList.add('fa-solid', 'fa-check');
        iconCross.classList.add('fa-solid', 'fa-xmark');
    }
    addId();
    document.getElementById('task-input').value = "";
}

submitBtn.addEventListener('click', function () {
    addTask(inputArea)
})
