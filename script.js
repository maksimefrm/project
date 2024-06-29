let students=[]
function addStudent() {
    let studentName = document.getElementsByName('studentName')[0].value
    students.push(studentName)
    showList()
}
function removeStudent() {
    let studentName = document.getElementsByName('studentName')[1].value
    let ind = students.findIndex((elem) => elem == studentName)
    if(ind != -1) {
        students.splice(ind, 1)
    }
    showList()
}

function changeStudent() {
    let oldName = document.getElementsByName('oldName')[0].value
    let ind = students.findIndex((elem) => elem == oldName)
    if(ind != -1) {
        let newName = document.getElementsByName('newName')[0].value
        students[ind] = newName
    }
    showList()
}

function showList() {
    let ul = document.querySelector("#studentsList");
    ul.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        let line = `<li>${students[i]}</li>`;
        ul.innerHTML = ul.innerHTML + line;
    }
}


<h3>Добавить студента</h3>
<input type="text" name="studentName">
<button onclick="addStudent()">Добавить в список</button>

<h3>Удалить студента</h3>
<input type="text" name="studentName">
<button onclick="removeStudent()">Удалить из список</button>

<h3>Заменить студента</h3>
<input type="text" name="oldName"> ->
<input type="text" name="newName">
<button onclick="changeStudent()">Заменить</button>

<h3>Список группы</h3>
<ol id="studentsList"></ol>