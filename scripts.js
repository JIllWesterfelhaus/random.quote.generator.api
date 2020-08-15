const colorRandomizer = () => {
const myColors = ['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f1c40f']
const randomNum=
Math.floor((Math.random()*myColors.length));

const randomColor=myColors[randomNum];
const bg=document.querySelector('.randomBGColor')
bg.setAttribute('style', 'background-color: ${randomColor}');

const textElements=document.querySelectorAll('randomTxtColor');
for(const text of textElements) {
    text.setAttribute('style', 'color: ${randomColor}')
}
}