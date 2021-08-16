function NMview () {
    let x = document.getElementById("navbar");
    let a = document.getElementById("main-doc");    
    let b = document.getElementById("welcomeSection");    
    let c = document.getElementById("HideMenuButton");
    let d = document.getElementById("WSImg");
    let e = document.getElementById("lineasDireccion");
    // let f = document.getElementById("lineaDireccionDerIzq");
    // let g = document.getElementById("lineaDireccionadora");
    console.log(x)
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x.style.opacity = "1";
        a.style.width = "80%";
        a.style.marginLeft = "17rem";
        b.style.marginLeft = "16rem";
        b.style.width = "80%";
        c.setAttribute("value", "Hide Menu");
        e.style.width = "80%";
        // f.style.width = "100%";
        // g.style.width = "50%";
    } else {
        x.style.visibility = "hidden";         
        x.style.opacity = "0";
        a.style.width = "100%";
        a.style.marginLeft = "0";
        b.style.marginLeft = "-1rem";
        b.style.width = "100%";
        c.setAttribute("value", "Show Menu");                
        d.style.padding = "0";
        e.style.width = "150%";        
        // f.style.width = "150%";
        // g.style.width = "50%";        
    }
}

