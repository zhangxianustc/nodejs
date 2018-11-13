function User() {
    var userName, password;
    function doLogin(user, pwd) {
        userName = user;
        password = pwd;
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

var fred = User();
fred.login("zx","123456");
