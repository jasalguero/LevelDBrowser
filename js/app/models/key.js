LDBB.Key = LDBB.Model.extend({});

LDBB.Key.reopenClass({
    findAll: function(bucketId){
        return LDBB.Model.findAll('/json/buckets/' + bucketId, LDBB.Key, 'bucket');
    },

    find: function(bucketId, keyId){
        return LDBB.Model.find('/json/buckets/' + bucketId + "/key", keyId, LDBB.Key, 'key');
    },

    updateRecord: function(model) {
        LDBB.Model.updateRecord("/json/buckets/" + model.get('bucketName') + "/key/" + model.get('keyName'), LDBB.Key, model);
    }
});