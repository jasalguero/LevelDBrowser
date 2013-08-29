LDBB.AddBucketController = Em.ObjectController.extend({
    newBucketName: '',

    addBucket: function(){
        console.log(this.get('newBucketName'));

    }
})