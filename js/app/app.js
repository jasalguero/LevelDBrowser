var LDBB = Em.Application.create({});

LDBB.Adapter = DS.RESTAdapter.extend({
    namespace: 'json'
});

LDBB.Store = DS.Store.extend({
    adapter: 'LDBB.Adapter'
});

LDBB.Router.map(function() {
    this.resource("buckets", {path: "/"}, function() {
        this.resource('bucket', {path: '/bucket/:bucket_id'}, function() {
            this.route('key', {path: '/key/:key_id'});
        });
    });
});

