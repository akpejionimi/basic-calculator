
document.addEventListener('DOMContentLoaded', function () {


    var first = document.getElementById("first");
    var scnd = document.getElementById("scnd");
    // console.log(first);
    // console.log(scnd);
    var answer = document.getElementById("answer");

    
    btn.addEventListener('click', function() {
        solution = parseInt(first.value) + parseInt(scnd.value);
        // console.log(solution);
        answer.innerHTML = solution;
    })

})
document.addEventListener('DOMContentLoaded', function () {
    var first = document.getElementById("first");
    var scnd = document.getElementById("scnd");
    // var button = document.getElementById("button");
    var answer = document.getElementById("answer");
    
    button.addEventListener("click", function() {
        solution  = parseInt(first.value) - parseInt(scnd.value);
        console.log(solution);
        answer.innerHTML = solution;
    })
    
})
document.addEventListener('DOMContentLoaded', function () {
    var first = document.getElementById("first");
    var scnd = document.getElementById("scnd");
    // var button = document.getElementById("button");
    var answer = document.getElementById("answer");
    
    btn2.addEventListener("click", function() {
        solution  = parseInt(first.value) * parseInt(scnd.value);
        console.log(solution);
        answer.innerHTML = solution;
    })
    
})
document.addEventListener('DOMContentLoaded', function () {
    var first = document.getElementById("first");
    var scnd = document.getElementById("scnd");
    // var button = document.getElementById("button");
    var answer = document.getElementById("answer");
    
    btn3.addEventListener("click", function() {
        solution  = parseInt(first.value) / parseInt(scnd.value);
        console.log(solution);
        answer.innerHTML = solution;
    })
    
})




