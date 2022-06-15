var names = [];
function submit() {
    var name_1 = document.getElementById("student_1").value ;
    var name_2 = document.getElementById("student_2").value ;
    var name_3 = document.getElementById("student_3").value ;
    var name_4 = document.getElementById("student_4").value ;
    names.push(name_1);
    names.push(name_2);
    names.push(name_3);
    names.push(name_4);
    console.log(names);
    document.getElementById("students").innerHTML = names;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sorting() {
    names.sort();
    console.log(names);
    document.getElementById("students").innerHTML = names;
}