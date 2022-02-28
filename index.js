//make the boxes move accordingly to window size
//autoplay function not working
//undefined after the results text
//image should be replaced and not stacked 

window.addEventListener("load", function() {
    setTimeout(function open(event){
        document.querySelector(".popup").style.display = "block";
    }, 2000);
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("#gallery").addEventListener("click", () => {
    window.open("gallery.html","_blank");
})

document.querySelector("#about").addEventListener("click", () => {
    window.open("all about.html","_blank");
})

function getVal() {
    const val = document.getElementById("Email").value
    const val2 = document.getElementById("hp").value

    const data = {
        val: val,
        val2: val2,
    }
    let error = ""
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var numformat = "^[0-9]+$"
    let redeemcode = Math.floor((Math.random() * 90000) + 9000)
    if (!val.match(mailformat)) {
        error+="Your email address is invalid\n"
    }
    if (val2.length < 8 && !val.match(numformat)){
        error+="Your handphone number should consist of 8 numbers"
    }

    if (error == "") {
        alert("Thank you for signing up with us! Your promotional code is E" + redeemcode + "E")
    } else {
        alert(error)
    }
}

function getOption() {
    let location = document.querySelector("#location");
    let course = document.querySelector("#course");
    let level = document.querySelector("#level");
    let redeem = document.querySelector("#redeem").value;
    let codeformat = ("[E]\\d{5}[E]")

    function pic(src, width, height, alt) {
        var a = document.createElement("img");
        a.src = src;
        a.width = 576;
        a.height = 410;
        a.alt = alt;
        document.body.appendChild(a);
        a.id = "building"
    }
    if (document.getElementById("building") != null){
        document.getElementById("building").remove()
    }
    
    if (location.value == "North" && level.value == "Beginner" && redeem == ""){
        output = "Please visit Woodlands Ave 3 Java Building #05-18 for your lessons. " + level.value + " " + course.value + " lessons will be $400 for every 4 lessons", pic('woodlands.jpeg','Woodlands');
    } else if (location.value == "North" && level.value == "Intermediate" && redeem == ""){
        output = "Please visit Woodlands Ave 3 Java Building #05-18 for your lessons. " + level.value + " " + course.value + " lessons will be $500 for every 4 lessons", pic('woodlands.jpeg','Woodlands');
    } else if (location.value == "North" && level.value == "Advanced" && redeem == ""){
        output = "Please visit Woodlands Ave 3 Java Building #05-18 for your lessons. " + level.value + " " + course.value + " lessons will be $600 for every 4 lessons", pic('woodlands.jpeg','Woodlands');
    } else if (location.value == "Central" && level.value == "Beginner" && redeem == ""){
        output = "Please visit Kallang shopping center #06-47 for your lessons. " + level.value + " " + course.value + " lessons will be $400 for every 4 lessons", pic('kallang.jpeg', 'Kallang')
    } else if (location.value == "Central" && level.value == "Intermediate" && redeem == ""){
        output = "Please visit Kallang shopping center #06-47 for your lessons. " + level.value + " " + course.value + " lessons will be $500 for every 4 lessons", pic('kallang.jpeg', 'Kallang')
    } else if (location.value == "Central" && level.value == "Advanced" && redeem == ""){
        output = "Please visit Kallang shopping center #06-47 for your lessons. " + level.value + " " + course.value + " lessons will be $600 for every 4 lessons", pic('kallang.jpeg', 'Kallang')
    } else if (location.value == "East" && level.value == "Beginner" && redeem == ""){
        output = "Please visit Tampines st 21 Blk 491F #02-91 for your lessons. " + level.value + " " + course.value + " lessons will be $400 for every 4 lessons", pic('tampines.jpeg', 'Tampines')
    } else if (location.value == "East" && level.value == "Intermediate" && redeem == ""){
        output = "Please visit Tampines st 21 Blk 491F #02-91 for your lessons. " + level.value + " " + course.value + " lessons will be $500 for every 4 lessons", pic('tampines.jpeg', 'Tampines')
    } else if (location.value == "East" && level.value == "Advanced" && redeem == ""){
        output = "Please visit Tampines st 21 Blk 491F #02-91 for your lessons. " + level.value + " " + course.value + " lessons will be $600 for every 4 lessons", pic('tampines.jpeg', 'Tampines')
    } else if (location.value == "West" && level.value == "Beginner" && redeem == ""){
        output = "Please visit Jurong community center #03-12 for your lessons. " + level.value + " " + course.value + " lessons will be $400 for every 4 lessons", pic('jurong.jpeg', 'Jurong')
    } else if (location.value == "West" && level.value == "Intermediate" && redeem == ""){
        output = "Please visit Jurong community center #03-12 for your lessons. " + level.value + " " + course.value + " lessons will be $500 for every 4 lessons", pic('jurong.jpeg', 'Jurong')
    } else if (location.value == "West" && level.value == "Advanced" && redeem == ""){
        output = "Please visit Jurong community center #03-12 for your lessons. " + level.value + " " + course.value + " lessons will be $600 for every 4 lessons", pic('jurong.jpeg', 'Jurong')
    } else if (location.value == "Neast" && level.value == "Beginner" && redeem == ""){
        output = "Please visit Sengkang CSS Mall #04-04 for your lessons. " + level.value + " " + course.value + " lessons will be $400 for every 4 lessons", pic('sengkang.jpeg', 'Sengkang')
    } else if (location.value == "Nest" && level.value == "Intermediate" && redeem == ""){
        output = "Please visit Sengkang CSS Mall #04-04 for your lessons. " + level.value + " " + course.value + " lessons will be $500 for every 4 lessons", pic('sengkang.jpeg', 'Sengkang')
    } else if (location.value == "Neast" && level.value == "Advanced" && redeem == ""){
        output = "Please visit Sengkang CSS Mall #04-04 for your lessons. " + level.value + " " + course.value + " lessons will be $600 for every 4 lessons", pic('sengkang.jpeg', 'Sengkang')
    } else if (location.value == "North" && level.value == "Beginner" && redeem.match(codeformat)){
        output = "Please visit Woodlands Ave 3 Java Building #05-18 for your lessons. " + level.value + " " + course.value + " lessons will be $360 for every 4 lessons after discount", pic('woodlands.jpeg','Woodlands');
    } else if (location.value == "North" && level.value == "Intermediate" && redeem.match(codeformat)){
        output = "Please visit Woodlands Ave 3 Java Building #05-18 for your lessons. " + level.value + " " + course.value + " lessons will be $450 for every 4 lessons after discount", pic('woodlands.jpeg','Woodlands');
    } else if (location.value == "North" && level.value == "Advanced" && redeem.match(codeformat)){
        output = "Please visit Woodlands Ave 3 Java Building #05-18 for your lessons. " + level.value + " " + course.value + " lessons will be $540 for every 4 lessons after discount", pic('woodlands.jpeg','Woodlands');
    } else if (location.value == "Central" && level.value == "Beginner" && redeem.match(codeformat)){
        output = "Please visit Kallang shopping center #06-47 for your lessons. " + level.value + " " + course.value + " lessons will be $360 for every 4 lessons after discount", pic('kallang.jpeg', 'Kallang')
    } else if (location.value == "Central" && level.value == "Intermediate" && redeem.match(codeformat)){
        output = "Please visit Kallang shopping center #06-47 for your lessons. " + level.value + " " + course.value + " lessons will be $450 for every 4 lessons after discount", pic('kallang.jpeg', 'Kallang')
    } else if (location.value == "Central" && level.value == "Advanced" && redeem.match(codeformat)){
        output = "Please visit Kallang shopping center #06-47 for your lessons. " + level.value + " " + course.value + " lessons will be $540 for every 4 lessons after discount", pic('kallang.jpeg', 'Kallang')
    } else if (location.value == "East" && level.value == "Beginner" && redeem.match(codeformat)){
        output = "Please visit Tampines st 21 Blk 491F #02-91 for your lessons. " + level.value + " " + course.value + " lessons will be $360 for every 4 lessons after discount", pic('tampines.jpeg', 'Tampines')
    } else if (location.value == "East" && level.value == "Intermediate" && redeem.match(codeformat)){
        output = "Please visit Tampines st 21 Blk 491F #02-91 for your lessons. " + level.value + " " + course.value + " lessons will be $450 for every 4 lessons after discount", pic('tampines.jpeg', 'Tampines')
    } else if (location.value == "East" && level.value == "Advanced" && redeem.match(codeformat)){
        output = "Please visit Tampines st 21 Blk 491F #02-91 for your lessons. " + level.value + " " + course.value + " lessons will be $540 for every 4 lessons after discount", pic('tampines.jpeg', 'Tampines')
    } else if (location.value == "West" && level.value == "Beginner" && redeem.match(codeformat)){
        output = "Please visit Jurong community center #03-12 for your lessons. " + level.value + " " + course.value + " lessons will be $360 for every 4 lessons after discount", pic('jurong.jpeg', 'Jurong')
    } else if (location.value == "West" && level.value == "Intermediate" && redeem.match(codeformat)){
        output = "Please visit Jurong community center #03-12 for your lessons. " + level.value + " " + course.value + " lessons will be $450 for every 4 lessons after discount", pic('jurong.jpeg', 'Jurong')
    } else if (location.value == "West" && level.value == "Advanced" && redeem.match(codeformat)){
        output = "Please visit Jurong community center #03-12 for your lessons. " + level.value + " " + course.value + " lessons will be $540 for every 4 lessons after discount", pic('jurong.jpeg', 'Jurong')
    } else if (location.value == "Neast" && level.value == "Beginner" && redeem.match(codeformat)){
        output = "Please visit Sengkang CSS Mall #04-04 for your lessons. " + level.value + " " + course.value + " lessons will be $360 for every 4 lessons after discount", pic('sengkang.jpeg', 'Sengkang')
    } else if (location.value == "Neast" && level.value == "Intermediate" && redeem.match(codeformat)){
        output = "Please visit Sengkang CSS Mall #04-04 for your lessons. " + level.value + " " + course.value + " lessons will be $450 for every 4 lessons after discount", pic('sengkang.jpeg', 'Sengkang')
    } else if (location.value == "Neast" && level.value == "Advanced" && redeem.match(codeformat)){
        output = "Please visit Sengkang CSS Mall #04-04 for your lessons. " + level.value + " " + course.value + " lessons will be $540 for every 4 lessons after discount", pic('sengkang.jpeg', 'Sengkang')
    } else if (location.value == "Anywhere" && level.value == "Beginner" && redeem.match == ""){
        output = level.value + " " + course.value + " lessons will be $400 for every 4 lessons"
    } else if (location.value == "Anywhere" && level.value == "Intermediate" && redeem.match == ""){
        output = level.value + " " + course.value + " lessons will be $500 for every 4 lessons"
    } else if (location.value == "Anywhere" && level.value == "Advanced" && redeem.match == ""){
        output = level.value + " " + course.value + " lessons will be $600 for every 4 lessons"
    } else if (location.value == "Anywhere" && level.value == "Beginner" && redeem.match(codeformat)){
        output = level.value + " " + course.value + " lessons will be $360 for every 4 lessons after discount"
    } else if (location.value == "Anywhere" && level.value == "Intermediate" && redeem.match(codeformat)){
        output = level.value + " " + course.value + " lessons will be $450 for every 4 lessons after discount"
    } else if (location.value == "Anywhere" && level.value == "Advanced" && redeem.match(codeformat)){
        output = level.value + " " + course.value + " lessons will be $540 for every 4 lessons after discount" 
    } else if (!redeem.match(codeformat)) {
        alert("Please enter a valid code")
    } else alert("Please choose a location, course and level to proceed")

    document.querySelector('.output').textContent = output
}
