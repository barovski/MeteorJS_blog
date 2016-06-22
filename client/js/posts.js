/**
 * Created by Ayoub MOUSTAID on 07-Jan-16.
 */

//Meteor.subscribe('#posts');
Meteor.subscribe('#users');

Template.posts.helpers({
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

Template.posts.events({
    'click .btn-delete' : function(evt){
    var id=evt.target.id;
        Meteor.call('removePost',id);
        alert('Deleted successfuly');
    }

});
