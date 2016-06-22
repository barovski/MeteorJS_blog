/**
 * Created by Ayoub MOUSTAID on 07-Jan-16.
 */
Messages=new Mongo.Collection('messages');
Posts=new Mongo.Collection('posts');
Pages = new Meteor.Pagination(Posts,{
    templateName:"blog",
    itemTemplate:"post",
    sort: {
        createdAt: -1
    },
    perPage: 4
});
Pages2 = new Meteor.Pagination(Posts,{
    templateName:"posts",
    itemTemplate:"postWithBtn",
    sort: {
        createdAt: -1
    },
    perPage: 10
});

Pages3 = new Meteor.Pagination(Messages,{
    templateName:"messages",
    itemTemplate:"message",
    sort: {
        sentAt: -1
    },
    perPage: 5
});


//Meteor.subscribe('#posts');
Meteor.subscribe('#users');
Accounts.ui.config({
    passwordSignupFields : 'USERNAME_AND_EMAIL'
});


Template.blog.helpers({
posts : function(){
    return Posts.find({},{
        sort:{createdAt: -1},
    });
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
        return(new Date(d)).toLocaleString();    }

});


