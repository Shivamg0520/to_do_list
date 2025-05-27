document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

  
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

      
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="remove-btn">Remove</button>
            </div>
        `;

    
        taskList.appendChild(listItem);

       
        taskInput.value = '';

       
        const completeButton = listItem.querySelector('.complete-btn');
        const removeButton = listItem.querySelector('.remove-btn');

        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem); 
        });
    }

   
    addTaskBtn.addEventListener('click', addTask);

   
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});