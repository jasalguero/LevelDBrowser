LDBB.BucketKeyController = Ember.ObjectController.extend({
    isEditing: false,

    doEdit: function() {
        this.set('isEditing', true);
    },

    doSave: function() {
        this.set('isEditing', false);
        this.get('store').commit();
    },

    modelObserver: function() {
        this.set('isEditing', false);
    }.observes('model')

});
