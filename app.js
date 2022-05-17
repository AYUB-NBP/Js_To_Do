//Clear Local Storage


document.querySelector('#form').onsubmit = () => { /*Add new Item */
    let newItem = document.createElement('li'); //NewLi
    if (document.querySelector('#input').value != '') {
        newItem.innerHTML = document.querySelector('#input').value;//Filled NewLi with input value
        document.getElementById('List').appendChild(newItem);/*Inserted newItem to list*/
        history.go(0);
    }
    else { document.querySelector('#input').placeholder = 'Type something.' }

    document.querySelector('#input').value = ''; //Cleared InputField



    //Local Storage Save
    localStorage.setItem('listItems', document.getElementById('List').innerHTML)
    return false; // Prevent refresh after submission
}

var listArr = document.getElementById('List').childNodes;

document.getElementById('clear').onclick = () => { window.localStorage.clear(); history.go(0); return false; }
