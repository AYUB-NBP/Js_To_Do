document.querySelector('#form').onsubmit = () => {
    let newItem = document.createElement('li'); //NewLi
    if (document.querySelector('#input').value != '') {
        newItem.innerHTML = document.querySelector('#input').value;//Filled NewLi with input value
        document.getElementById('List').appendChild(newItem);/*Inserted newItem to list*/
    }
    else { document.querySelector('#input').placeholder = 'Type something.' }
    document.querySelector('#input').value = ''; //Cleared InputField

    //Local Storage Save
    return false;
}