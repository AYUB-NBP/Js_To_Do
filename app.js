
// Form Submission

document.querySelector('#form').onsubmit = () => {
    //New list item
    let newItem = document.createElement('li');
    //NewBtn (removing button for each list item)
    var newBtn = document.createElement('button');
    //Adding class to newBtn
    newBtn.classList.add('rmvBtn');
    //Remove Buttons Array
    const rmvBtns = document.querySelectorAll('.rmvBtn')
    //Item Removal Function
    //function removeListItem() { console.log('Event working'); }
    //Button Filler
    newBtn.innerHTML = 'X';



    if (document.querySelector('#input').value != '') {
        //Fill NewLi with input value
        newItem.innerHTML = document.querySelector('#input').value;
        //Inserted newItem to list
        document.getElementById('List').appendChild(newItem);
        newItem.appendChild(newBtn);
        history.go(0);
    }
    else { document.querySelector('#input').placeholder = 'Type something.' }

    //Cleared InputField
    document.querySelector('#input').value = '';


    //Local Storage Save
    localStorage.setItem('listItems', document.getElementById('List').innerHTML)

    // Prevent refresh after submission
    return false;
}

// Clear All Button function
document.getElementById('clear').onclick = () => { window.localStorage.clear(); history.go(0); return false; }//Clear Local Storage

