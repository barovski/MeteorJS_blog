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
Meteor.publish('#posts',function(){
    return Posts.find({},{
        sort:{createdAt: -1},
        limit: 10
    });
});
Meteor.publish('#messages',function(){
    return Messages.find({},{
        sort:{createdAt: -1},
        limit:10
    });
});
Meteor.publish('#users',function(){
    return Meteor.users.find({},{
    });
});
Accounts.onCreateUser(function(o,user){
    user.profile={
        firstName:'empty',
        lastName:'empty'
    };
    return user;
});
