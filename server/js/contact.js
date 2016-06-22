/**
 * Created by Ayoub MOUSTAID on 09-Jan-16.
 */


Meteor.methods({
    sendMessage:function(o,c,e){
        if(Meteor.userId())
        {

                Messages.insert({
                    obj: o,
                    content:c,
                    email: e,
                    sentAt:Date.now(),
                    sentBy:Meteor.user().username
                });
        }
        else {

                Messages.insert({
                    obj: o,
                    content:c,
                    email: e,
                    sentAt:Date.now(),
                    sentBy:'visitor'
                });


        }

    }
});