window.addEventListener('load', solution);

function solution() {
  const input = {
    employee: document.getElementById('employee'),
    category: document.getElementById('category'),
    urgency: document.getElementById('urgency'),
    assigned_team: document.getElementById('team'),
    description: document.getElementById('description')
  }
  const lists = {
    problem: document.querySelector('.container'),
    preview: document.querySelector('.preview-list'),
    pending: document.querySelector('.pending-list'),
    resolved: document.querySelector('.resolved-list')
  }
  const addButton = document.getElementById('add-btn');
  
  
  addButton.addEventListener('click', onAdd);

  function onAdd(event){
    event.preventDefault();
    addButton.setAttribute('disabled', 'true');
    const name = input.employee.value;
    const category = input.category.value;
    const urgency = input.urgency.value;
    const team = input.assigned_team.value;
    const description = input.description.value;
    if (name == '' || category == '' || urgency == '' || team == '' || description == '') {
      return;
  }

    //create 
    const li = document.createElement('li');
    li.className = 'problem-content';
    li.innerHTML = `<article>
    <p>From: ${name}</p>
    <p>Category: ${category}</p>
    <p>Urgency: ${urgency}</p>
    <p>Assigned to: ${team}</p>
    <p>"Description: ${description}"</p>
    </article>
    <button class ="edit-btn">Edit</button>
    <button class ="continue-btn">Continue</button>`;

    //add functionality to buttons
    const editBtn = li.querySelector('.edit-btn')
    .addEventListener('click', edit);
    const continueBtn = li.querySelector('.continue-btn')
    .addEventListener('click', onContinue)

    //append to first list
    lists.preview.appendChild(li);

    //clear fields at the end 
    input.employee.value = '';
    input.category.value = '';
    input.urgency.value = '';
    input.assigned_team.value = '';
    input.description.value = '';

    function edit() {
      addButton.removeAttribute('disabled');
      addButton.removeAttribute('disabled', '');
      lists.preview.removeChild(li);

      input.employee.value = name;
      input.category.value = category;
      input.urgency.value = urgency;
      input.assigned_team.value = team;
      input.description.value = description;
    }
    function onContinue() {
      lists.preview.removeChild(li);
      const liNew = document.createElement('li');
      liNew.className = 'problem-content';
      liNew.innerHTML = `<article>
      <p>From: ${name}</p>
      <p>Category: ${category}</p>
      <p>Urgency: ${urgency}</p>
      <p>Assigned to: ${team}</p>
      <p>"Description: ${description}"</p>
      </article>
      <button class ="resolve-btn">Resolve</button>`;

      const resolvedBtn = liNew.querySelector('.resolve-btn').addEventListener('click', onResolve);
      
      lists.pending.appendChild(liNew);

      function onResolve(){
        lists.pending.removeChild(liNew);
        const liResolve = document.createElement('li');
        liResolve.className = 'problem-content';
        liResolve.innerHTML = `<article>
        <p>From: ${name}</p>
        <p>Category: ${category}</p>
        <p>Urgency: ${urgency}</p>
        <p>Assigned to: ${team}</p>
        <p>"Description: ${description}"</p>
        </article>
        <button class ="clear-btn">Clear</button>`;
  
        const clearBtn = liResolve.querySelector('.clear-btn').addEventListener('click', onClear);
        
        lists.resolved.appendChild(liResolve);
        function onClear() {
          lists.resolved.removeChild(liResolve);
        }
        }
        
    }
    
      
  }
}


    
    
