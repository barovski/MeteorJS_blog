/**
 * Created by Ayoub MOUSTAID on 10-Jan-16.
 */
Template.message.helpers({
    isAdmin:function(){
        if(Meteor.user())
            return Meteor.user().username==="admin";
        else
        return false;
    },
    messages : function(){
        if(Meteor.user()){
        if(Meteor.user().username==="admin")
            return Messages.find({},{
                sort:{sentAt: -1},
            });}
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
        return(new Date(d)).toLocaleString();
    }

});