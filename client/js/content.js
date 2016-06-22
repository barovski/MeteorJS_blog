/**
 * Created by Ayoub MOUSTAID on 07-Jan-16.
 */
Meteor.subscribe('#users');
Template.content.helpers({
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
