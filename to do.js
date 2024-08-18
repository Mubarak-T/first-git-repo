// Create li child
// apend to ul tag


const addTask = () => {
    const task =  document.getElementById("taskinput").value
    const liTag = document.createElement("li")
    liTag.textContent = task
    const parentTag = document.getElementById("tasklist")
    parentTag.appendChild(liTag);
}