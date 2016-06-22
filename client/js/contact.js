/**
 * Created by Ayoub MOUSTAID on 08-Jan-16.
 */

Template.contact.events({
    'click #btn-send-message' : function(){
        var o=$('#obj');
        var e=$('#email');
        var c=$('#content');
        if(!o.val() || !c.val() || !e.val())
            alert('Empty input');
        else{
        Meteor.call('sendMessage',o.val(), c.val(), e.val());
        alert("sent successfuly");
        }
    }
});
