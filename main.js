function show(item) {
    var array = ["pap", "feud", "boggs", "conmen"];
    for (let index = 0; index < array.length; index++) {
        if(array[index] != item) document.getElementById(array[index]).style.display = "none";        
    }
    var x = document.getElementById(item);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
