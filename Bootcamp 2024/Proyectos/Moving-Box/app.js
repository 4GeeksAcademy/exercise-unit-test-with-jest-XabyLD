
let nId = 0; 

const createBox = () => {
    const element = document.createElement("div");
    element.innerHTML = `<div onclick="moveBox()" class="box" id="${randomId()}">${nId}</div>`
    document.body.appendChild(element);
   
};

const randomId = () => {
    nId++;
    return nId;
}

const moveBox = () => {
    const box = document.querySelector("#boxTest");
    


}

const moveMouse = addEventListener("mousemove", (event) => {
    console.log(event)
})

