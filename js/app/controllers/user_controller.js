LDBB.UserController = Em.ObjectController.extend({
    isLoggedIn: false,

    init: function() {
        this._super();
        var controller = this;
        // Mozilla Persona
        navigator.id.watch({
            loggedInUser: null,
            onlogin: function(assertion) {
                console.log("logged in" + assertion);
            },
            onlogout: function() {
                console.log("logged out");
            }
      });
    }
});