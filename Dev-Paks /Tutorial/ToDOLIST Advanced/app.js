
const input = document.getElementById('input')
const dateInput = document.getElementById('dateInput')
const addBtn = document.getElementById('btn')
const deleteBtns = document.querySelectorAll('.deleteBtns')
const displayList = document.getElementById('displayList')


const toDoList = JSON.parse(localStorage.getItem('toDoList')) || []

// RENDER TODO FUNCTION
function renderToDoList(){


    let toDoListHTML = ''


    // USING THE FOR EACH METHOD TO ITERATE THROUGH
    toDoList.forEach((todoObject, index)=>{

        // USE DESTRUCTURING
        // const name = todoObject.name
        // const dueDate = todoObject.dueDate

        const {name, dueDate} = todoObject

        const html = 
        ` <div class = 'todoDisplay'> 
            <div> ${name} </div>
            <div> ${dueDate} </div>
             
            <button class="deleteBtns">Delete</button>
        </div>`
        toDoListHTML += html

    })

        displayList.innerHTML = toDoListHTML

        deleteBtns.forEach((deleteBtn, index)=>{
            deleteBtn.addEventListener('click', ()=>{
                toDoList.splice(index, 1)
                renderToDoList()
            })
        })

        

    // // USING THE FOR LOOP TO ITERATE THROUGH
    // for(let i = 0; i < toDoList.length; i++){
    //     const todoObject = toDoList[i]

    //     // USE DESTRUCTURING
    //     // const name = todoObject.name
    //     // const dueDate = todoObject.dueDate

    //     const {name, dueDate} = todoObject

    //     const html = 
    //     ` <div class = 'todoDisplay'> 
    //         <div> ${name} </div>
    //         <div> ${dueDate} </div>
             
    //         <button 
    //             onclick ="toDoList.splice(${i}, 1) 
    //             renderToDoList()
    //             localStorage.setItem('toDoList', JSON.stringify(toDoList)) ">
                
    //             Delete 

    //         </button>
    //     </div>`
        // toDoListHTML += html
    // }

}

renderToDoList()



// ADD TODO FUNCTION
function addToDo(){
    const name = input.value
    const dueDate = dateInput.value
    toDoList.push({
        name, 
        dueDate
    })
    
    input.value = ''
    dateInput.value = ''
    renderToDoList()
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}   

// ADD TODO LIST BTN CLICK EVENT
addBtn.addEventListener('click', addToDo)







