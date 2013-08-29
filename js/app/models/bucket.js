LDBB.Bucket = LDBB.Model.extend({
    keys: function() {
        var keys = Ember.A();
        var bucketid = this.get('id');

        if (this.get('key_ids')) {
            this.get('key_ids').forEach(function(keyid) {
                console.log('bucketid: ' + bucketid + " keyid: " + keyid);
                keys.pushObject(LDBB.Key.find(bucketid, keyid));
            });
        }

        return keys;
    }.property('key_ids.length')
});

LDBB.Bucket.reopenClass({
    find: function(id) {
        console.log(id);
        return LDBB.Model.find('/json/buckets', id, LDBB.Bucket, 'bucket');
    },

    findAll: function() {
        return LDBB.Model.findAll('/json/buckets', LDBB.Bucket, 'buckets');
    },

    create: function(bucketName) {
        return LDBB.Model.createRecord('/json/buckets', LDBB.Bucket, LDBB.Bucket.create({'id':bucketName}))

    }
});
