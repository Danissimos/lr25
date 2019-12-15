function Function1() {
    var x = document.getElementsByClassName("div1");
    var newWin = window.open("about:blank", "hello", "width=200,height=200");
    newWin.document.write("Вы открыли новое окно.");
}
function Function2() {
    do {
    var x = document.getElementsByClassName("div2");
    var name = prompt("Введите ваше имя");
    var correct = confirm("Вы ввели '" + name + "'.\n" + "Щелкните ОК, чтобы продолжить, или Отмена, чтобы повторить ввод.");
    } while(!correct) 
    alert("Привет, " + name);
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "Привет, " + name;}
}
