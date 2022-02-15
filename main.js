let button = document.getElementById("generator");
const name_input = document.getElementById('name_input');  // Our main and only input field

const submitName = () => {
    const name = name_input.value;  // value of input field when button is clicked!
    const reversed_name = name.split("").reverse().join("");
    document.getElementById('reversed_name').innerText = reversed_name;
}
button.addEventListener("click", submitName);


