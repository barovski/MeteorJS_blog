/**
 * Created by Ayoub MOUSTAID on 09-Jan-16.
 */
//Meteor.subscribe('#messages');
Meteor.subscribe('#users');
Template.messages.helpers({

    messages : function(){
        if(Meteor.user()){
        if(Meteor.user().username==="admin")
            return Messages.find({},{
                sort:{sentAt: -1},
            });
        }
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
