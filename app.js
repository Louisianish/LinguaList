// Vanilla JavaScript to-do list app tutorial by CodingTheSmartWay.com which I (Louisianish) have done in Louisiana French and Louisiana Creole and have added keys for typing letters with diacritics. This is for the convenience of those who are using the application on desktop. I have also created a home page where the user can choose the language that they want to make the list in. 

// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Local Storage - Added by Louisianish
function store() {
    window.localStorage.myitems = list.innerHTML;
}

function getValues() {
    var storedValues = window.localStorage.myitems;
    list.innerHTML = storedValues;
}


(function () {

    var list = document.querySelector('#list');
    var form = document.querySelector('form');
    var input = document.querySelector('#input');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        list.innerHTML += input.value;
        store();
        input.value = '';
    }, false);

    // list.addEventListener('click', function(e) {
    //     var t = e.target;
    //     if (t.classList.contains('checked')) {
    //         t.parentNode.removeChild(t);
    //     } else {
    //         t.classList.add('checked');
    //     }
    //     store();
    // }, false);

    // function store() {
    //     window.localStorage.myitems = list.innerHTML;
    // }

    // function getValues() {
    //     var storedValues = window.localStorage.myitems;
    //     list.innerHTML = storedValues;
    // }

    getValues();

    console.log('store()');
})();

  // Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
  
    if (input.value != '')
        addTodo(input.value);
    input.value = '';

    // getValues();
    store();
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);

    store();
}

function handleClearAll(_e) {
    document.querySelector('ul').innerHTML = '';

    store();
}

// Accent Mark Buttons - Added by Louisianish
function valueButton(e) {
    var form = document.querySelector('form');
    form.input.value += e.value;
}

// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton" class="checkBtn"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton" class="deleteBtn"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);

    // store();
}

function checkTodo(e) {
    let item = e.target.parentNode;
    
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
    store();
}

function deleteTodo(e) {
    let item = e.target.parentNode;

    item.addEventListener('transitionend', function () {
        item.remove();
    })
    
    item.classList.add('todo-list-item-fall');
    store();
}