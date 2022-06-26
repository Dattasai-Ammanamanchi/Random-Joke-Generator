const image = document.querySelector('img');
const jokeDiv = document.querySelector('#display-joke');
const btn = document.querySelector('#get-joke');

btn.addEventListener('click',function() {

    getRandomjoke();
})

function getRandomjoke() {
    const ajax =new XMLHttpRequest();
    const url = 'https://api.chucknorris.io/jokes/random';

    ajax.open('GET', url,true);

    ajax.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDiv.innerHTML = `${data.value}`
        } else{
            this.oneerror = onerror(); 
        }
    }
    ajax.send();
}

function onerror(){
    jokeDiv.textContent = 'There was an error!';
}