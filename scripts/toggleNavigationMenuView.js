function NMview () {
    let x = document.getElementById("navbar");
    let a = document.getElementById("main-doc");    
    let b = document.getElementById("welcomeSection");    
    let c = document.getElementById("HideMenuButton");
    let d = document.getElementById("WSImg");
    console.log(x)
    if (x.style.display === "none") {
        x.style.display = "block";
        a.style.width = "80%";
        a.style.marginLeft = "17rem";
        b.style.marginLeft = "16rem";
        b.style.width = "80%";
        c.setAttribute("value", "Hide Menu");
    } else {
        x.style.display = "none";         
        a.style.width = "100%";
        a.style.marginLeft = "0";
        b.style.marginLeft = "-1rem";
        b.style.width = "100%";
        c.setAttribute("value", "Show Menu");        
        d.style.padding = "0";
    }
}

