var allimg=document.images
console.log(allimg)

for (i=0;i<allimg.length;i++)
 {
allimg[i].src=`./photos/${i}.jpg`
allimg[i].addEventListener("click",function()
         {
          document.getElementById("bigimg").style.backgroundImage=`url(${this.src})`
          document.getElementById("background").style.backgroundImage=`url(${this.src})`
         console.log(this.src)
         })
}
