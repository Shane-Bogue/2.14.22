document.body.style.fontFamily = 'Arial,sans-serif'
console.log(document.querySelectorAll('li'))
document.querySelectorAll('li').forEach((element, i) => {
    element.firstChild.textContent += `Im #${i + 1}`;
    element.className = 'list-item';
});
const img = document.createElement('img')
img.src = 'https://www2.pictures.livingly.com/mp/GYQ7z6crVMJx.jpg'
document.body.append(img);