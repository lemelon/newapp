module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
       dist: {
          options: {
             banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
          },
          files: {
             'frontend/stylesheets/style.min.css': ['frontend/stylesheets/*.css']
          }
      }
    },
    uglify: {
      build: {
        src: [
          "frontend/angularLib/angular.js",
          "frontend/angularLib/angular-tagger.min.js",
          "frontend/angularLib/angular-animate.js",
          "frontend/angularLib/angular-resource.js",
          "frontend/angularLib/ui-bootstrap-tpls.js",
          "frontend/angularLib/angular-route.js",
          "frontend/angularLib/angular-messages.js",
          "frontend/angularLib/ngStorage.js",
          "frontend/angularLib/toaster.js",
          "frontend/angularLib/angular-css.min.js",
          "frontend/angularLib/angular-file-upload.js",
          "frontend/angularLib/angular-wurfl-image-tailor.js",
          "frontend/angularLib/http-auth-interceptor.js",
          "frontend/app.js",
          "frontend/angularConfig.js",
          "frontend/angularRun.js",
          "frontend/angularFactories/appLoadingFctr.js",
          "frontend/angularControllers/MainAngCtrl.js",
          "frontend/angularControllers/MainHeaderAngCtrl.js",
          "frontend/angularControllers/announces/CreateAnnounceAngCtrl.js",
          "frontend/angularControllers/announces/ListAnnouncesAngCtrl.js",
          "frontend/angularControllers/announces/ShowAnnounceAngCtrl.js",
          "frontend/angularControllers/announces/EditAnnounceAngCtrl.js",
          "frontend/angularControllers/profile/ProfileAngCtrl.js",
          "frontend/angularControllers/profile/ProfileViewAngCtrl.js",
          "frontend/angularControllers/profile/ActualityAngCtrl.js",
          "frontend/angularControllers/modal/AboutModalAngCtrl.js",
          "frontend/angularControllers/profile/HistoricAngCtrl.js",
          "frontend/angularControllers/profile/MessageAngCtrl.js",
          "frontend/angularControllers/profile/PictureAngCtrl.js",
          "frontend/angularControllers/profile/ReputationAngCtrl.js",
          "frontend/angularControllers/profile/SettingsAngCtrl.js",
          "frontend/angularControllers/profile/AboutAngCtrl.js",
          "frontend/angularControllers/profile/JournalAngCtrl.js",
          "frontend/angularControllers/profile/WalletAngCtrl.js",
          "frontend/angularDirectives/validator/pswCompareToValidatorDrct.js",
          "frontend/angularDirectives/filters/ratingDrct.js",
          "frontend/angularDirectives/chat/onBlurDrct.js",
          "frontend/angularDirectives/chat/onFocusDrct.js",
          "frontend/angularDirectives/validator/emailAvailableValidatorDrct.js",
          "frontend/angularDirectives/filters/userFilterDrct.js",
          "frontend/angularDirectives/filters/checkboxListDrct.js",
          "frontend/angularDirectives/validator/usernameAvailableValidatorDrct.js",
          "frontend/angularDirectives/fileUploadDrct.js",
          "frontend/angularFactories/StatusFctr.js",
          "frontend/angularFactories/ActualityFctr.js",
          "frontend/angularFactories/auth/AuthFctr.js",
          "frontend/angularFactories/auth/SessionFctr.js",
          "frontend/angularFactories/auth/user/UserFctr.js",
          "frontend/angularFactories/auth/user/UsernameFctr.js",
          "frontend/angularFactories/announces/AnnouncesFctr.js",
          "frontend/angularFactories/socket/NotificationsFctr.js",
          "frontend/angularFactories/announces/CommentsFctr.js",
          "frontend/angularFactories/socket/FriendsFctr.js",
          "frontend/angularFactories/socket/chat/MessagesFctr.js",
          "frontend/angularFactories/socket/chat/RoomsFctr.js",
          "frontend/angularFactories/socket/SocketFctr.js",
          "frontend/angularFactories/auth/user/ProfileFctr.js",
          "frontend/angularFactories/socket/LikeFctr.js",
          "frontend/angularFactories/ImageFctr.js",
          "frontend/angularFilters/starsFltr.js",
          "frontend/angularFilters/cutFltr.js",
          "frontend/angularFilters/searchForFltr.js"
        ],
        dest: 'frontend/minifiedProject.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('heroku', ['uglify', 'cssmin']);

};
