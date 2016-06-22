/**
 * Created by Ayoub MOUSTAID on 10-Jan-16.
 */
Template.postWithBtn.helpers({
    posts : function(){
        return Posts.find({},{
            sort:{createdAt: -1},
            limit: 10
        });
    },
    formatDate:function(d){
        return(new Date(d)).toLocaleString();
    },
    hasPicture : function(u){
        var user=Meteor.users.findOne({username:u});
        return user.profile.picture != null;
    },
    getPicture : function(u){
        var user=Meteor.users.findOne({username:u});
        return user.profile.picture;
    },
    isMyPost:function(author)
    {
        return author===Meteor.user().username;
    }
});


