/**
 * Created by Ayoub MOUSTAID on 09-Jan-16.
 */
Meteor.methods({
    addPost:function(t,c){
        if(Meteor.userId())
        {

        Posts.insert({
            title: t,
            content:c,
            createdAt:Date.now(),
            updatedAt:Date.now(),
            author:Meteor.user().username
        });

        }
    }
});
