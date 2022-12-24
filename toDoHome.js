const ul = document.getElementById('list')
const input = document.getElementById('inputField')
const submit = document.getElementById('submitBtn')

submit.addEventListener('click', e => {
    ul.innerHTML += `<li onclick="toggleButton(this)" id="mark"
            style="background-color: #275e6f; color: #ffffff;"
            class="list-group-item">${input.value}
            <span onclick='parentNode.parentNode.removeChild(parentNode)'
            id="delete" class="float-end">X</span>
        </li>`
})

input.addEventListener('keypress', e => {
    let green = '#51df70'
    let blue = '#275e6f'
    if (e.key === "Enter") {
        // !!! IT IS NOT RESPONSIVE !!!
        ul.innerHTML += `<li onclick="toggleButton(this)" id="mark"
            style="background-color: #275e6f; color: #ffffff;"
            class="list-group-item">${input.value}
            <span onclick='parentNode.parentNode.removeChild(parentNode)'
            id="delete" class="float-end">X</span>
        </li>`
    }
})

function toggleButton(marking) {
    let green = 'rgb(81, 223, 112)'
    let blue = '#275e6f'
    var color = marking.style.backgroundColor;
    // Only works with color writtin in rgb form for some reason,
        // hex color does not work.
    color = marking.style.backgroundColor = color === green ? blue : green;
}