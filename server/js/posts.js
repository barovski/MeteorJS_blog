/**
 * Created by Ayoub MOUSTAID on 09-Jan-16.
 */


Meteor.methods({
    removePost:function(id){
        if(Meteor.userId())
            Posts.remove({_id:id});
    }
});