/**
 * Created by Ayoub MOUSTAID on 09-Jan-16.
 */
Meteor.subscribe('#users');
Template.modifyProfil.helpers({

 hasPicture : function(){
  return Meteor.user().profile.picture != null;
 },
 getPicture : function(){
  return Meteor.user().profile.picture;
 },
 getFirstName : function(){
  return Meteor.user().profile.firstName;
 },
 getLastName : function(){
  return Meteor.user().profile.lastName;
 }
});
Template.modifyProfil.events({
 'click #btn-picture':function(){
  MeteorCameraUI.getPicture({
   width:400,
   quality:80
  },function(er,data){
  if(er)
  alert('Error taking picture');
   else
  Meteor.call('updatePicture',data);
   alert('Modified Successfuly');

  })
 },

 'click #btn-modify-info':function(){
  var f=$('#firstName');
  var l=$('#lastName');
  if(!l.val() || !f.val())
  alert('Empty input');
  else{
    Meteor.call('updateInfo', l.val(), f.val());
  alert('Modified Successfuly');
  }
 }
  });

