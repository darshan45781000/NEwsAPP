

window.onload=function(){


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]




toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



}



function Send(aa,bb,cc,dd,ee)
{
    var total=parseInt(bb.value) * parseInt(cc.value);
    total=total.toString();
    fetch('http://localhost:3001/insert',{
   headers:{
       'Content-type':'application/json'
   },
        method:'POST',
        body: JSON.stringify({
            imageurl: aa.value,
            price: bb.value,
            quality: cc.value,
            total: total,
            Name:dd.value,
            ProductId: ee.value
        })
    }).then((response)=> response.json())
    .then((data)=>{
        alert('Product saved to cart')
    })
    .catch((error)=>{
        alert(error);
    });
}