LDBB.Model = Em.Object.extend({

});

LDBB.Model.reopenClass({
    find: function(url, id, type, key) {
        console.log('find id: ' + id + ' url: ' + url + ' type: ' + type);

        var collection = Ember.get(type, 'collection');

        if (!collection) {
            collection = Ember.A();
            Ember.set(type, 'collection', collection);
        }

        var foundItem = this.getObjectById(id, type);
        if (!foundItem) {
            foundItem = type.create({id: id});
            $.getJSON(url + "/" + id, function(data) {
                if (data[key]) {
                    foundItem.setProperties(data[key]);
                }
            });

            Ember.get(type, 'collection').pushObject(foundItem);
        }


        return foundItem;
    },

    findAll: function(url, type, key){
        console.log('Model findAll: ' + type);
        var collection =  Em.get(type, 'collection');

        if (!collection) {
            collection = Em.A();
            Em.set(type, 'collection', collection);
        }

        var model = this;

        $.getJSON(url, function(data) {
            console.log(data);
            if (data[key]) {
                $.each(data[key], function(i, row) {
                    var item = model.getObjectById(row.id, type)
                    if (!item) {
                        item = type.create({id: row.id});
                        collection.pushObject(item);
                    }

                    item.setProperties(row);
                });
            }
        });

        return Em.get(type, 'collection');
    },

    getObjectById: function(id, type){
        var bucket = null

        var collection = Em.get(type, 'collection');

        if (!collection) {
            collection = Em.A();
            Em.set(type, 'collection')
        }

        collection.forEach(function(item){
            if (item.get('id') === id){
                bucket = item;
            }
        });

        return bucket;
    },

    updateRecord: function(url, type, model) {
        console.log('update: ' + type + " " + model.get('id'));

        model.set('isSaving', true);
        console.log(JSON.stringify(model));
        $.ajax({
            type: "PUT",
            url: url,
            data: JSON.stringify(model),
            success: function(res, status, xhr) {
                if (res.id) {
                    model.set('isSaving', false);
                    model.setProperties(res);
                } else {
                    model.set('isError', true);
                }
            },
            error: function(xhr, status, err) { model.set('isError', false);  }
        });
    },

    createRecord: function(url, type, model){
        console.log('create: ' + type + " " + model.get('id'));

        model.set('isSaving', true);
        console.log(JSON.stringify(model));
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(model),
            success: function(res, status, xhr) {
                if (res.id) {
                    model.set('isSaving', false);
                    model.setProperties(res);
                } else {
                    model.set('isError', true);
                }
            },
            error: function(xhr, status, err) { model.set('isError', false);  }
        });
    }
});