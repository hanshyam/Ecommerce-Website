        let rowimg = document.getElementsByClassName('rowimg')[0];
        let imgbox = document.querySelector('.img-box');
        let imgg = rowimg.querySelectorAll('img');
        console.log("Ghanshyam")

        Array.from(imgg).forEach((e)=>{
             e.addEventListener('click',(element)=>{
                 imgbox.querySelector('img').src = e.src;
             })
        })
        