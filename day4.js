console.log("hey hi");

const first = document.getElementById("p1");
first.innerHTML = "some text";

function example() {
    console.log("hi everyone gathered here");
}

const input = document.getElementById("input");
const output = document.getElementById("inputfield");

input.addEventListener("input", () => {
    output.textContent = input.value;
})
const second = document.createElement("p")
second.textContent ="New Paragraph"
document.body.appendChild(second)
second.remove()
