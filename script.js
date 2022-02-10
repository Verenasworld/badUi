

console.log("test" + document.getElementById("bmiBtn"))

document.getElementById("bmiBtn").addEventListener("click", function () {
    document.getElementById("result1").innerHTML = "bitte mach dir einen Termin aus und schreibe mir es wird Zeit"
})

document.getElementById('ownImage').addEventListener("mousemove",function (){
    alert("da bist du falsch")
} )

document.getElementById('btn1').addEventListener("click", function (){
alert("du bist falsch")
})


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
