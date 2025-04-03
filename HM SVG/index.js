function color() {
    let Wheel_1 = document.querySelector("#Wheel_1");
    Wheel_1.style.fill = "blue";
}

function color_2() {
    let Wheel_2 = document.querySelector("#Wheel_2");
    Wheel_2.style.fill = "blue";
}

function move_forward() {
    document.querySelector("#car").classList.add("move_forward");
}

function move_back() {
    document.querySelector("#car").classList.add("move_back");
}