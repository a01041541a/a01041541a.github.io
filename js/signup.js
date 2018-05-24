var dbRefObject = firebase.database().ref().child('Users');
var dataSnapshot;

dbRefObject.once('value', function (snapshot) {
    //alert("I am in the reading function." + userName + ": " + passWord);
    console.log("In once() method.");
    console.log(snapshot.val());

    dataSnapshot = snapshot;

});


//Sync object changes
//dbRefObject.on('value', snap => console.log(snap.val()));

function signup() {
    var username = document.getElementById('username').value;
    var pwd1 = document.getElementById('password1').value;
    var pwd2 = document.getElementById('password2').value;
    var isPwdNotEqual = false;
    var isUserRepeat = false;

    if (pwd1 != pwd2) {
        isPwdNotEqual = true;
        alert("Password are not equal");

    } else {

        dataSnapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(username + "--- " + childData['user_name']); // ...

            if (username == childData['user_name']) {
                isUserRepeat = true;
                console.log("isUerRepeat = true");
            }
        });

        //alert("come here now " + isUserRepeat);

        if (isUserRepeat == true) {
            // document.getElementById('resultDisp').innerHTML = "Forget Password  (User Repeat)";

            console.log("Repeat user");

            alert("Repeat user!")

            //           dbRefObject.push().set({
            //               name: user_name,
            //               password: pwd1
            //           });

        } else {
            var data = {
                //user_id: uid,
                user_name: username,
                user_pwd: pwd1,
                user_score: 0
            }

            //var updates = {};
            //updates['Users'] = data;

            dbRefObject.push().set(data);

            alert("User is created successfully!");

        }

        isUserRepeat = false;
    }
}
