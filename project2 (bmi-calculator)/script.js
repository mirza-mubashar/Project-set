document.querySelector('form').addEventListener( 'submit', (e)=>{
    e.preventDefault()
    
    alert(`This web app is practiced by Mubashar Siddique`)
    let height = document.querySelector('.user-height').value
    let weight = document.querySelector('.user-weight').value
    let bmi = (weight / (height * height)).toFixed(2);    
    document.querySelector('.result').style.display = 'block'
    document.querySelector('.result').innerHTML = `<span>You'r body mass index is ${bmi}.</span> <p>Please Refresh(F5) the page to perform calculations again</p>`
    document.querySelector('input').setAttribute('disabled')        

})



