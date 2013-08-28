LDBB.BucketRoute = Em.Route.extend({
    model: function(bucket){
        return LDBB.Bucket.find(bucket.bucket_id);
    }
});