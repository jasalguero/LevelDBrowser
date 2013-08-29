LDBB.BucketsController = Em.ArrayController.extend({

});

LDBB.BucketsController.reopenClass({
    addBucket: function(bucketName){
        console.log("adding bucket" + JSON.stringify(model));
    }
});