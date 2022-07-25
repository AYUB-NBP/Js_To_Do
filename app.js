
// Form Submission

document.querySelector('#form').onsubmit = () => {
    //New list item
    let newItem = document.createElement('li');

    //New remove button
    var newBtn = document.createElement('button');

    // Add Self Deletion functionality onclick
    newBtn.setAttribute("onclick", "localStorage.removeItem(this.closest('li').innerText);this.closest('li').remove()")

    //Adding class to newBtn
    newBtn.classList.add('rmvBtn');

    //Button Filler
    newBtn.innerHTML = '<img src="X.svg" alt="Delete" style="border: none;">';

    if (document.querySelector('#input').value != '') {
        //Fill New Li with input value
        newItem.innerHTML = document.querySelector('#input').value;
        //Inserted newItem to list
        document.getElementById('List').appendChild(newItem);
        newItem.appendChild(newBtn);
    }
    else { document.querySelector('#input').placeholder = 'Type something.' }

    //Cleared InputField
    document.querySelector('#input').value = '';

    //Local Storage Save
    localStorage.setItem(newItem.innerText, newItem.outerHTML)

    // Prevent refresh after submission
    return false;
}

// Clear All Button function
document.getElementById('clear').onclick = () => { window.localStorage.clear(); history.go(0); return false; }//Clear Local Storage
