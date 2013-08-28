LDBB.BucketsRoute = Em.Route.extend({
    model: function(){
        return LDBB.Bucket.findAll();
    }
});