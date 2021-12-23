let addBtn = document.querySelector('.Add-Btn');
let input = document.querySelector('.input');
addBtn.addEventListener('click', () => {
    if (input.value == '') {
        let feedbackValue = document.createElement('LI');
        feedbackValue.innerHTML = 'Please Add Grocery Item';
        document.querySelector('.feedback').appendChild(feedbackValue);
        setTimeout(function () {
            document.querySelector('.feedback').innerHTML = '';
        }, 2000)
    }
    else {
        let feedbackValue = document.createElement('LI');
        feedbackValue.innerHTML = `${input.value} <a class="trash" type = 'button'><i class="fa fa-trash" aria-hidden="true"></i></a>`;
        feedbackValue.classList.add('trash-btn');
        document.querySelector('.output').appendChild(feedbackValue);
        input.value = '';
    }
})
let output = document.querySelector('.output')
output.addEventListener('click', deleteCheck);
function deleteCheck(e){
    const item = e.target.parentElement;
    // delete todo
    if (item.classList[0] === "trash"){
        const todo = item.parentElement;
        todo.remove();
    }
}
let removeBtn = document.querySelector('.Remove-Btn');
removeBtn.addEventListener('click',()=>{
    output.innerHTML = '';
})