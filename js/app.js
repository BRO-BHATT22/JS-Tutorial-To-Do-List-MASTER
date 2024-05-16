const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Shows todays date

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function

function addToDo(toDo){
    const item = `

    <i class="fa fa-check-circle co" job="complete" id="0"></i>
    <p class="text lineThrough">$</p>
    <i class="fa fa-trash-o de" jobs="delete" id="0"></i>

                `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}
