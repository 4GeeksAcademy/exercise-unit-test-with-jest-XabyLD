
/*let nId = 0; 

const createBox = () => {
    const element = document.createElement("div");
    element.innerHTML = `<div onclick="moveBox(event)" class="box" id="${randomId()}">${nId}</div>`
    document.body.appendChild(element);
   
};

const randomId = () => {
    nId++;
    return nId;
}
let isMoving = false;



const moveBox = (event) => {
    const box = document.getElementById(event.target.id);
    isMoving = true;
    window.addEventListener("mousemove", (e) =>{
        if(!isMoving) return;
        box.style.top = e.clientY + "px";
        box.style.left = e.clientX + "px";
    });

};

const stopBox = () => {
    isMoving = false;
    window.removeEventListener("mousemove", (e) => {

    })
}
*/

// A PARTIR DE AQUI SON PRUEBAS.

let nId = 0;

const createBox = () => {
    const element = document.createElement("div");
    element.innerHTML = `<div onclick="moveBox(event)" class="box" id="${randomId()}">${nId}</div>`;
    document.body.appendChild(element);
};

const randomId = () => {
    nId++;
    return nId;
};

let isMoving = false;
let activeBoxId = null; // Almacenar el ID de la caja activa

const moveBox = (event) => {
    if (isMoving) return; // Si ya estamos moviendo una caja, no hacer nada
    isMoving = true;
    activeBoxId = event.target.id; // Establecer la caja activa
    window.addEventListener("mousemove", handleMouseMove);
};

const handleMouseMove = (e) => {
    if (!isMoving) return;
    const box = document.getElementById(activeBoxId);
    box.style.top = e.clientY + "px";
    box.style.left = e.clientX + "px";
};

const stopBox = () => {
    isMoving = false;
    activeBoxId = null; // Restablecer la caja activa
    window.removeEventListener("mousemove", handleMouseMove);
};
