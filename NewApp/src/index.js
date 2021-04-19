if('serviceWorker' in navigator)
      {
        window.addEventListener('load',()=>{
          navigator.serviceWorker.register('serviceworker.js')
          .then((reg)=>console.log('Success:'))
          .catch((error)=>console.log('Error hi', error));
        })
    }


    var baseurl="http://localhost:49556/api/NewsTables/";
    function loadDetails(){
        console.log("hi1");
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",baseurl,true);
        xmlhttp.onreadystatechange=function (){
            console.log("hi3");
            console.log(xmlhttp.readyState);
            console.log(xmlhttp.status);
            if(xmlhttp.readyState==4 && xmlhttp.status==200){
                console.log("hi2");
                var news=JSON.parse(xmlhttp.responseText);
                console.log(news);
                var display="<center><div> <img src="+news[0].Image +" width="+350+" height="+300+" ></div>"+
                "<div><h1 >"+news[0].NewsCatagory+"</h1></div>"+
                "<div><h3 >"+news[0].NewHeadLine+"</h3></div>"+
                "<div>"+news[0].NewDesc+"</div> </center>"
               
                document.getElementById("NewsDetails").innerHTML=display;
            }
        };
        xmlhttp.send();
    }
    window.onload=function(){
        loadDetails();
    }