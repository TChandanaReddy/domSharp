var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addition);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addition(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;
    var description=document.getElementById('description').value;

    // Create new li element
    var li= document.createElement('li');

    // Add class
    li.className='list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(description));

    // Create delete button element
    var deleteBtn=document.createElement('button');

    // Add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append li to list
    itemList.appendChild(li);

    // Edit button
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
    // Append button to li
    li.appendChild(deleteBtn);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text=e.target.value.toLowerCase();
    //console.log(text);
    // Get lis
    var items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        } else{
            item.style.display='none';
        }
        var descr=item.childNodes[1].textContent;
        if(descr.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }
    });
}