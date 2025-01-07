function onload(){
    const preview = document.getElementById('preview');

    preview.textContent = '';
}
let negate = null;

document.getElementById('AC').addEventListener('click', function(){
        const preview = document.getElementById('preview')
        let answer = document.getElementById('answer')

        preview.textContent = ' ';
        answer.textContent = ' ';
        negate = null;
});

// Select all elements with the class 'btns'
const clickableElements = document.querySelectorAll('.btns');
const preview = document.getElementById('preview');
//const ans = `${eval(`${preview.textContent}`)}`;

// Adding click event listener to each btn element
clickableElements.forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('answer').textContent = '';
        preview.textContent += this.textContent;
        if (preview.textContent.length > 20) {
            preview.textContent = ''
        } 
    });
});

document.getElementById('equal').addEventListener('click', function(){
    const preview = document.getElementById('preview');
    const answer = document.getElementById('answer');
    const ans = `${eval(`${preview.textContent}`)}`

     if (preview.textContent.length > 10) {
        //ans.length > 20 || 
        //answer.textContent = 'OverLoad'
        preview.textContent = '';
    } else {
        negate = null;
        try{
        answer.textContent = eval(`${preview.textContent}`);
    }
    catch (error) {
        answer.textContent = 'Error';
    }};
    preview.textContent = '';
});

document.getElementById('neg').addEventListener('click', function(){
    const preview = document.getElementById('preview');
    const neg = document.getElementById('neg');
   
    //const answer = document.getElementById('answer');
    if(negate === null){
    preview.textContent += `(-`
    negate = true
        neg.textContent = `)`
} else {
    preview.textContent += `)`
         neg.textContent = `+/-`
    negate = null
}
});

document.getElementById('C').addEventListener('click', function(){
    const preview = document.getElementById('preview');
    const text = preview.textContent;

    preview.textContent = text.slice(0, -1);
});

window.onload = onload;