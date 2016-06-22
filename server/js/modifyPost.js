/* Created by Ayoub MOUSTAID on 09-Jan-16.*/

Meteor.methods({
    modifyPost:function(id,t,c){
        if(Meteor.userId())
        {

                Posts.update({_id:id},{$set:{
                    title: t,
                    content:c,
                    updatedAt:Date.now()
                }});

         }
    }

});