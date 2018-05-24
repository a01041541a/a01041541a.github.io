var dbRefObject = firebase.database().ref('Users');
var dbRefDummyObject = firebase.database().ref('Users/dummy');

var dataSnapshot;

dbRefObject.once('value', function (snapshot) {
    //alert("I am in the reading function." + userName + ": " + passWord);
    console.log("In once() method.");
    //            console.log(snapshot.val());

    dataSnapshot = snapshot;

});


function login() {
    var dbRefObject = firebase.database().ref('Users');
    var isUserValid = false;
    var userKey;

    console.log(dataSnapshot.val());


    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    console.log(userName + "---" + passWord + "()" + isUserValid);

    dataSnapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        console.log(childKey + " " + childData['user_name'] + " " + childData['user_pwd'] + " " +
            childData['user_score']);

        if (childData['user_name'] == userName && childData['user_pwd'] == passWord) {
            isUserValid = true;
            userKey = childKey;
            console.log(userName + "+++" + passWord + "()" + isUserValid);

        }
    });
    console.log(userName + "***" + passWord + "()" + isUserValid);

    if (isUserValid == true) {
        console.log("User is valid. Login success");
        // document.getElementById('loginresult').innerHTML = "User is Valid!";

        //document.getElementById('status').innerHTML = "(Valid user)";
        localStorage.setItem("loginStatus", "true");
        localStorage.setItem("userKey", userKey);
        localStorage.setItem("currentUser", userName);
        localStorage.setItem("currentPwd", passWord);
        alert("User is valid. Login success");

    } else {
        alert("Not valid user!" + userName + " " + passWord);
        console.log("User is Invalid. Login fail");

        //document.getElementById('loginresult').innerHTML = "User is inValid!";

        //document.getElementById('status').innerHTML = "(InValid user)";

    }

    isUserValid = false;

}
