let imageFigureElement          =   document.querySelector("image-figure");

if(!imageFigureElement)
{
    imageFigureElement          =   document.createElement("image-figure");
}


setTimeout(() => 
{
    imageFigureElement.setAttribute("Caption", "Gambar 1");
}, 1000);

setTimeout(() => 
{
    imageFigureElement.remove();    
}, 300);