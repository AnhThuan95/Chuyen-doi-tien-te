function convert() {
    let a = parseInt(document.getElementById("a").value);

    let b = document.getElementById("from").value;
    let c = document.getElementById("to").value;

    if (b == c) {
        document.getElementById("result").innerHTML = "Vui long chon loai dong tien!";
    } else {
        if (b == "USD" && c == "VND") {
            let x = a * 23000;
            document.getElementById("result").innerHTML = x + " " + c;
        }
        if (b == "USD" && c == "EUR") {
            let x = a * 26 / 23;
            document.getElementById("result").innerHTML = x + " " + c;
        }
        if (b == "VND" && c == "EUR") {
            let x = a / 26000;
            document.getElementById("result").innerHTML = x + " " + c;
        }
        if (b == "VND" && c == "USD") {
            let x = a / 23000;
            document.getElementById("result").innerHTML = x + " " + c;
        }
        if (b == "EUR" && c == "VND") {
            let x = a * 26000;
            document.getElementById("result").innerHTML = x + " " + c;
        }
        if (b == "EUR" && c == "USD") {
            let x = a * 23 / 26;
            document.getElementById("result").innerHTML = x + " " + c;
        }
    }
}
