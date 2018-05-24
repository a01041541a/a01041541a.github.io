if (localStorage.getItem("loginStatus") == "true") {
    var name;
    var a1 = document.getElementById("item1");
    name = localStorage.getItem("currentUser");
    var text = document.createTextNode(name);
    a1.appendChild(text);

    var a2 = document.getElementById("item2");
    var text2 = document.createTextNode("Log-out");
    a2.setAttribute("onclick", "logout()");
    a2.setAttribute("href", "index.html");
    a2.appendChild(text2);
} else {
    var a1 = document.getElementById("item1");
    var text = document.createTextNode("Log-in");
    a1.setAttribute("href", "login.html");
    a1.appendChild(text);

    var a2 = document.getElementById("item2");
    var text2 = document.createTextNode("Sign-up");
    a2.setAttribute("href", "signup.html");
    a2.appendChild(text2);
}

function logout() {
    localStorage.setItem("loginStatus", "false");
}
