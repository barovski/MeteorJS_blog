/**
 * Created by Ayoub MOUSTAID on 10-Jan-16.
 */
Template.post.helpers({
    posts : function(){
        return Posts.find({},{
            sort:{createdAt: -1},
        });
    },
    hasPicture : function(u){
        var user=Meteor.users.findOne({username:u});
        return user.profile.picture != null;
    },
    getPicture : function(u){
        var user=Meteor.users.findOne({username:u});
        return user.profile.picture;
    },
    formatDate:function(d){
        return(new Date(d)).toLocaleString();    }

});
