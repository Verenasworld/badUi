//shop schlimmste log ever ! and reload page with set timeout function
function shopping() {
    let psdl = document.getElementById('password').value;
    console.log("testausgabe password: " + psdl);
    // methode set timeout  anonyme funktion , -  was und wann gemacht werden soll
    //ich übergebe eine Methode Parameter
    setTimeout(() => {
        window.location.reload()
    }, 5000);
}

//bmi
document.getElementById("bmiBtn").addEventListener("click", function () {
    document.getElementById("result1").innerHTML = "bitte mach dir einen Termin aus und schreibe mir es wird Zeit sich zu bewegen "
})
//img alert
document.getElementById('ownImage').addEventListener("mousemove", function () {
    alert("da bist du falsch")
})
//card btn1
document.getElementById('btn1').addEventListener("click", function () {
    alert("du bist falsch");

})

//arrow move up
function moveUp() {
    let arrowMove = document.getElementById('arrow');
    console.log("up");
    arrowMove.classList.add('arrowup');
    setTimeout(() => {
        window.location.assign('index.html')
    }, 3000);

}

// text animation fade out on mouseover
let slideSource = document.getElementById('content');
document.getElementById('content').addEventListener("mousemove", function () {
    slideSource.classList.toggle('fade');

})


//logo click function move logo to the right
let logo = document.getElementById('logo');
logo.onclick = function () {
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        logo.style.left = timePassed / 2 + 'px';

        if (timePassed > 4000) clearInterval(timer);

    }, 10);
}


function ani() {
    document.getElementsByClassName('imgProduct').className = 'classname';
}

//flipcard function add csslass

let cardM = document.getElementById('cardM');
cardM.addEventListener("click",flipCard);

function flipCard(){
    cardM.classList.toggle('flipCard')
}

//form 
// Example starter JavaScript for disabling form submissions if there are invalid fields
!function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
}();



