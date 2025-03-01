const allComplete=document.getElementsByClassName('complete-btn');
for (const complete of allComplete) {
    complete.addEventListener('click',function(){

    // task decrease
    const task= getElementById('task-count')
    const currentCount = task-1;
    setInnerTextByIdAndValue('task-count', currentCount )
    // console.log(currentCount)


    // value added
    const valueAdded=getElementById('value-added');
    const convertedValueAdded =parseFloat(valueAdded)
    const currentValue=convertedValueAdded + 1;
    const headingValueOne = getElementById('first-title');
    setInnerTextByIdAndValue('value-added',currentValue)

    // append activity log
    const container=document.getElementById('activity-container');
    const p1 = document.createElement('p');
    p1.innerText=`You have completed the task ${headingValueOne} issue at
    `;
    container.appendChild(p1)
    // console.log("container", container);
    // console.log("p1", p1);
    alert('Board updated Successfully')
        complete.disabled=true;
    })
}


document.getElementById('clear-btn').addEventListener('click',function(){
    const containerDiv=document.getElementById('activity-container');
    containerDiv.style.display='none'
})