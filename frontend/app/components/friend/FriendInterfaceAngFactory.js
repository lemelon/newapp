angular.module('InTouch')
  .factory('FriendInterface', FriendInterface);

FriendInterface.$inject = ['toaster', 'socket', 'Friend', '$rootScope', 'Notification'];

function FriendInterface(toaster, socket, Friend, $rootScope, Notification) {
  
  var FriendInterface = function() {
    Friend.prototype.setField.apply(this, arguments);
  };

  FriendInterface.prototype = Object.create(Friend.prototype);
  FriendInterface.prototype.constuctor = Friend;

  FriendInterface.prototype.postNotification =  function() {

    var friend = Friend.prototype.postFriend.apply(this, arguments);

    var self = this;
    return friend.then(function() {
      // before returning the result,
      // call our new private method and bind "this" to "self"
      // we need to do this because the method is not part of the prototype
      return postNotification.call(self);
    });

  }

  FriendInterface.prototype.postAcceptNotification =  function() {

    var friend = Friend.prototype.postFriend.apply(this, arguments);

    var self = this;
    return friend.then(function() {
      // before returning the result,
      // call our new private method and bind "this" to "self"
      // we need to do this because the method is not part of the prototype
      return postAcceptNotification.call(self);
    });

  }

  return FriendInterface;

  function postNotification() {
    var self = this;

    console.log(self);
    var notification = new Notification();

    notification.setField(self._friendField.usernameWaitFriendRequest, self._friendField.idUser, 'friendRequest');
    notification.postNotification().then(function() {
      toaster.pop('success', 'Vous avez envoyé une requête d\'amitié');
      socket.emit('sendFriendRequest', {
        user: $rootScope.currentUser.username,
        userDes: self._friendField.usernameWaitFriendRequest,
        userDesId: self._friendField.idUser,
        id: $rootScope.currentUser._id
      });
    });
  }

  function postAcceptNotification() {
    var self = this;

    console.log(self);
    var notification = new Notification();

    notification.setField(self._friendField.usernameAcceptedFriendRequest, self._friendField.idUser, 'accept');
    notification.postNotification().then(function() {
      console.log('notifications success');
      console.log('toaster');
      toaster.pop('success', 'Vous avez accepté la requête d\'amitié');
      socket.emit('sendAcceptFriendRequest', {
        userRec: $rootScope.currentUser.username,
        userDes: self._friendField.usernameAcceptedFriendRequest,
        userDesId: self._friendField.idUser,
        id: $rootScope.currentUser._id
      });
    });
  }
}
