/**
 * Created by Ayoub MOUSTAID on 06-Jan-16.
 */
Router.configure({
    layoutTemplate:'layout'
});

Router.route('/',function(){
   this.render('blog');
});

Router.route('/posts',function(){
    this.render('posts');
});

Router.route('/about',function(){
    this.render('about');
});

Router.route('/contact',function(){
    this.render('contact');
});

Router.route('/addPost',function(){
    this.render('addPost');
});
Router.route('/content',function(){
    this.render('content');
});

Router.route('/modifyPost/:id',function(){

    this.render('modifyPost',{
        data : function (){
            return Posts.findOne({_id:this.params.id});
        }
    });
});
Router.route('/content/:id',function(){

    this.render('content',{
        data : function (){
            return Posts.findOne({_id:this.params.id});
        }
    });
});


Router.route('/messages',function(){
    this.render('messages');
});
Router.route('/modifyProfil',function(){
    this.render('modifyProfil');
});
Router.route('/post',function(){
    this.render('post');
});
Router.route('/postWithBtn',function(){
    this.render('postWithBtn');
});
Router.route('/message',function(){
    this.render('message');
});