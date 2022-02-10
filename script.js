//shop
function shopping(){
    let psdl =  document.getElementById('password').value;
    console.log("testausgabe password: "+psdl);
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
    alert("du bist falsch")
})



//arrow move up
function moveUp(){
   let arrowMove=  document.getElementsByClassName('arrow');

    arrowMove.addEventListener('mousemove',mouseOverEffect());

}
function mouseOverEffect() {
    this.classList.add('moveup');
}




//logo click function move logo to the right
let logo = document.getElementById('logo');
logo.onclick = function () {
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        logo.style.left = timePassed / 2 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}

//form
function ani() {
    document.getElementById('img').className = 'classname';
}

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
