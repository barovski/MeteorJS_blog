/**
 * Created by Ayoub MOUSTAID on 06-Jan-16.
 */

Template.addPost.events({
    'click #btn-add-post' : function(){
        var t=$('#title');
        var c=$('#content');
        if(!t.val() || !c.val())
            alert('Empty input');
        else{
        Meteor.call('addPost', t.val(), c.val());
        alert("added successfuly");
        t.val('').focus();
        c.val('');
        }
    }
});
