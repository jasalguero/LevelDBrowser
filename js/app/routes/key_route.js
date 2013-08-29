LDBB.BucketKeyRoute = Ember.Route.extend({
    model: function(key) {
        var bucket = this.modelFor('bucket');
        return LDBB.Key.find(bucket.get('id'), key.key_id);
    }
});