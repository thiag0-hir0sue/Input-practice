function dataInput() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    document.getElementById("result").innerText = name + " your age is " + age + " year old and you live in " + city
}