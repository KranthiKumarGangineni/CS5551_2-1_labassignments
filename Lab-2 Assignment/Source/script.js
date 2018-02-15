function  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    localStorage.setItem("gmailId",profile.getEmail());
    alert("Signing-In Now with your mail Id : "+profile.getEmail());
    window.location.href = "Kranthi.html";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        localStorage.removeItem("gmailId");
        alert("You have Succesfully siged out");
        window.location.href = "Login.html";
    });
}

function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}