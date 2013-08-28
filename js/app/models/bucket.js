LDBB.Bucket = Em.Object.extend({

});

LDBB.Bucket.reopenClass({
    collection: Em.A(),

    find: function(id){
        var foundItem = this.getObjectById(id);

        return foundItem;
    },

    findAll: function(){
        var collection = Em.get(LDBB.Bucket, 'collection');
        collection.pushObject(LDBB.Bucket.create({"id": "One", "key_ids": ["Key One", "Key Two"]}));
        collection.pushObject(LDBB.Bucket.create({"id": "Two", "key_ids": ["Key Three", "Key Four"]}));
        return Em.get(LDBB.Bucket, 'collection');
    },

    getObjectById: function(id){
        var bucket = null

        Em.get(LDBB.Bucket, 'collection').forEach(function(item){
            if (item.get('id') === id){
                bucket = item;
            }
        });

        return bucket;
    }
});