function oh(i){
    if(i==1){
        document.querySelector(".q1").classList.add("active");
        document.querySelector(".qq1").classList.add("active");
        document.querySelector(".q2").classList.remove("active");
        document.querySelector(".qq2").classList.remove("active");
        document.querySelector(".q3").classList.remove("active");
        document.querySelector(".qq3").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".q1").classList.remove("active");
        document.querySelector(".qq1").classList.remove("active");
        document.querySelector(".q2").classList.add("active");
        document.querySelector(".qq2").classList.add("active");
        document.querySelector(".q3").classList.remove("active");
        document.querySelector(".qq3").classList.remove("active");
    }
    else{
        document.querySelector(".q1").classList.remove("active");
        document.querySelector(".qq1").classList.remove("active");
        document.querySelector(".q2").classList.remove("active");
        document.querySelector(".qq2").classList.remove("active");
        document.querySelector(".q3").classList.add("active");
        document.querySelector(".qq3").classList.add("active");
    }
}