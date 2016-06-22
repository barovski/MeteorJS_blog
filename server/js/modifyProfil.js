/**
 * Created by Ayoub MOUSTAID on 09-Jan-16.
 */
Meteor.methods({
    updatePicture:function(data){
        if(Meteor.userId())
        {
            Meteor.users.update({
                _id:Meteor.userId()
            },{
                $set:{
                    'profile.picture':data
                }
            });
        }
    },

    updateInfo:function(l,f){
        if(Meteor.userId())
        {
            Meteor.users.update({
                _id:Meteor.userId()
            },{
                $set:{
                    'profile.lastName':l,
                    'profile.firstName':f
                }
            });

        }
    }


});