var LDBB = Em.Application.create({})

LDBB.Router.map(function() {
    this.resource("buckets", {path: "/"}, function() {
        this.resource("bucket", {path: "/bucket/:bucket_id"}, function() {});
    });
});

