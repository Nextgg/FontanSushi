
const inputElement = document.getElementById('inputlist');
const btnElement = document.getElementById('create');
const listElement = document.getElementById('list')

let ArrayOrder = ["Филадельфия","Бинго"]

function getNoteTemplate(value,index)
{
    return`
        <li>
            <span data-index="${index}">${value}</span>
            <span>
                <button data-type="delete" data-index="${index}">&times;</button>
            </span>
        </li>
        `
}
function renderOrder ()
{
    listElement.innerHTML=''
    for(let i=0;i<ArrayOrder.length;i++)
    {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(ArrayOrder[i],i))
    }
}
renderOrder()
btnElement.onclick = function () {

    if(inputElement.value.length===0)
    {
        return
    }
    ArrayOrder.push(inputElement.value)
    renderOrder()
    inputElement.value='';
}

listElement.onclick = function (event)
{
    if(event.target.dataset.index)
    {
        let index = Number(event.target.dataset.index)
        ArrayOrder.splice(index,1);
        renderOrder()
    }
}

