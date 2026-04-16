document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskContainer = document.getElementById("taskContainer");
    const floatingContainer = document.getElementById("floatingContainer");

    
    const symbols = ["💖", "🐱", "🐰", "⭐", "🦄", "🌸"];

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; 

        const taskBox = document.createElement("div");
        taskBox.classList.add("task-box");
        taskBox.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">❌</button>
            </div>
        `;

        
        taskBox.querySelector(".complete-btn").addEventListener("click", () => {
            taskBox.classList.toggle("completed");
            showFloatingCharacter();
        });

       
        taskBox.querySelector(".delete-btn").addEventListener("click", () => {
            taskBox.remove();
        });

        taskContainer.appendChild(taskBox);
        taskInput.value = "";
    });

    function showFloatingCharacter() {
        const floatingEmoji = document.createElement("div");
        floatingEmoji.classList.add("floating");
        floatingEmoji.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        floatingEmoji.style.left = `${Math.random() * 100}%`;

        floatingContainer.appendChild(floatingEmoji);

      
        setTimeout(() => {
            floatingEmoji.remove();
        }, 2000);
    }
});
