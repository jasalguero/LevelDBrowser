LDBB.BucketKeyController = Ember.ObjectController.extend({
    isEditing: false,

    doEdit: function() {
        this.set('isEditing', true);
    },

    doSave: function() {
        this.set('isEditing', false);
        var model = this.get('content');
        LDBB.Key.updateRecord(model);
    },

    modelObserver: function() {
        this.set('isEditing', false);
    }.observes('model')

});
