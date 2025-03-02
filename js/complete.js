const allComplete = document.getElementsByClassName('complete-btn');
for (const complete of allComplete) {
    complete.addEventListener('click', function () {

        // task decrease
        const task = getElementById('task-count')
        const currentCount = task - 1;
        setInnerTextByIdAndValue('task-count', currentCount)
        // console.log(currentCount)

        // value added
        const valueAdded = getElementById('value-added');
        const convertedValueAdded = parseFloat(valueAdded)
        const currentValue = convertedValueAdded + 1;
        const headingValue = complete.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;

        setInnerTextByIdAndValue('value-added', currentValue)

        // append activity log




        const container = document.getElementById('activity-container');
        const p1 = document.createElement('p');


        const d = new Date();
        p1.innerText = `You have completed the task ${headingValue} issue at ${d.toDateString()}
    `;
        p1.classList.add('p-2', 'bg-gray-200', 'rounded-md', 'my-2')
        container.appendChild(p1)
        // console.log("container", container);
        // console.log("p1", p1);
        alert('Board updated Successfully')
        complete.disabled = true;

        if (currentCount === 0) {
            alert('congratulation!!! You have completed all the current task')
        }
    })
}


document.getElementById('clear-btn').addEventListener('click', function () {
    const containerDiv = document.getElementById('activity-container');
    containerDiv.style.display = 'none'
})

