function calculate(){
    sth = document.getElementById("st-hours").value;
    str = document.getElementById("st-rate").value;
    st = sth * str;

    document.getElementById("st1").innerHTML = str;
    document.getElementById("st2").innerHTML = sth;
    document.getElementById("st3").innerHTML = st;

    oth = document.getElementById("ot-hours").value;
    otr = document.getElementById("ot-rate").value;
    ot = oth * otr;

    document.getElementById("ot1").innerHTML = otr;
    document.getElementById("ot2").innerHTML = oth;
    document.getElementById("ot3").innerHTML = ot;

    dth = document.getElementById("dt-hours").value;
    dtr = document.getElementById("dt-rate").value;
    dt = dth * dtr;

    document.getElementById("dt1").innerHTML = dtr;
    document.getElementById("dt2").innerHTML = dth;
    document.getElementById("dt3").innerHTML = dt;

    res = 'P' + (st + ot + dt);
    document.getElementById("total").innerHTML = res;
}

function zero(){
    document.getElementById("st-hours").innerHTML = 0;
    document.getElementById("st-rate").innerHTML = 0;

    document.getElementById("st1").innerHTML = 0;
    document.getElementById("st2").innerHTML = 0;
    document.getElementById("st3").innerHTML = 0;

    document.getElementById("ot-hours").innerHTML = 0;
    document.getElementById("ot-rate").innerHTML = 0;

    document.getElementById("ot1").innerHTML = 0;
    document.getElementById("ot2").innerHTML = 0;
    document.getElementById("ot3").innerHTML = 0;

    document.getElementById("dt-hours").innerHTML = 0;
    document.getElementById("dt-rate").innerHTML = 0;

    document.getElementById("dt1").innerHTML = 0;
    document.getElementById("dt2").innerHTML = 0;
    document.getElementById("dt3").innerHTML = 0;

    res = 'P0';
    document.getElementById("total").innerHTML = res;
}

document.getElementById("mode").onclick = () => {
const colorScheme = document.documentElement.getAttribute("colors");  
document.documentElement.setAttribute("colors", colorScheme === "default" ? "dark" : "default");

}