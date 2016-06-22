/**
 * Created by Ayoub MOUSTAID on 07-Jan-16.
 */


Template.modifyPost.events({
    'click .btn-modify-post' : function(evt){
       var id=evt.target.id;
        var t=$('#title');
        var c=$('#content');
        if(!t.val() || !c.val())
            alert('Empty input');
        else{
        Meteor.call('modifyPost',id,t.val(), c.val());
        alert("modified successfuly");
        }
        }
});