/**
 * Created by Ayoub MOUSTAID on 10-Jan-16.
 */
Meteor.subscribe('#users');
Template.layout.helpers({

    isAdmin : function(){
        return Meteor.user().username==='admin';
    }


});