let count = 0, correct = 0, incorrect = 0;
const textstring = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, saepe quae,ab itaque necessitatibus sit earum laudantium molestiae eaque veritatis recusandae fuga sapiente natus ullam neque, commodi facilis enim libero.";
    
function updater(l)
{
    letter = document.getElementById(`letter#${count}`);
    if(l === 'Backspace')
    {
        letter.style.color = 'black';
        count--;
        return;
    }
    if(letter.innerText === l.toLowerCase() || letter.innerText === l.toUpperCase()){
        letter.style.color = 'green';
        correct++;
    }
    else{
        letter.style.color = 'red';
        incorrect++;
    }
    
    count++;

    if(count == textstring.length)
    {
        box = document.querySelector('#typebox');
        box.remove();
        user = document.querySelector('#userinput');
        let correctscore = document.createElement('div');
        correctscore.style.color = 'green';
        correctscore.innerText = `Correct: ${correct}`;
        
        let incorrectscore = document.createElement('div');
        incorrectscore.innerText = `Incorrect: ${incorrect}`;
        incorrectscore.style.color = 'red';
        user.appendChild(correctscore);
        user.appendChild(incorrectscore);
    }
}

function initialize()
{
    text = document.querySelector('#typetext');
    for(let i = 0; i < textstring.length; i++)
    {
        letter = document.createElement("span");
        letter.innerText = textstring[i];
        letter.id = `letter#${i}`;
        letter.classList.add('letter');
        text.appendChild(letter);
    }

    box = document.querySelector('#typebox');
    box.addEventListener('keydown', function(e){
        updater(e.key);
        box.value='';
        console.log(e.key);
    });
}



initialize();