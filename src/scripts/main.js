document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-draw').addEventListener('submit', function(e){
        e.preventDefault()

        let maxNum = document.getElementById('max-num').value;
        maxNum = parseInt(maxNum);

        let randomNum = Math.random() * maxNum;
        randomNum = Math.floor(randomNum + 1)
        document.getElementById('result-value').innerText = randomNum

        document.querySelector('.result').style.display = 'block'
    })
})