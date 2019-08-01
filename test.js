function convert() {
    let a = parseInt(document.getElementById("a").value);

    let b = document.getElementById("from").value;
    let c = document.getElementById("to").value;

    if (b == "USD" && c == "VND"){
        let x = a * 23000;
        document.getElementById("result").innerHTML = x + " " +c;
    } else {
        document.getElementById("result").innerHTML ="Vui long chon chuyen tu USD sang VND. Cac phan khac toi dang nghien cuu!"
    }
}