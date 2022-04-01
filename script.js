
var thankam = angular.module('thankam',['ui.router']);
var url = 'http://localhost/learning/le-admin/';
thankam.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url:'/',
            templateUrl: 'template/home.html'

        })
     $stateProvider
        .state('about',{
            url:'/about',
            templateUrl: 'template/about.html'

        })
      $stateProvider
        .state('support',{
            url:'/support',
            templateUrl: 'template/support.html'

        })
       $stateProvider
        .state('gallery',{
            url:'/gallery',
            templateUrl: 'template/gallery.html'

        })
       $stateProvider
        .state('testimony',{
            url:'/testimony',
            templateUrl: 'template/testimony.html'

        })
       $stateProvider
        .state('contact',{
            url:'/contact',
            templateUrl: 'template/contact.html'

        })
       
       $stateProvider
        .state('news',{
            url:'/news',
            templateUrl: 'template/news.html'

        })
       $stateProvider
        .state('payment',{
            url:'/payment',
            templateUrl: 'template/payment.html'

        })
}])



thankam.controller('homeCtrl', function($scope, $http){
	
})


$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});



function changeSelect(i){
  $(".mom").removeClass('sel'+i);
  $("#mm"+i).addClass('sel'+i);
}
  function showSM(){
    $("#sm-menu").show(500);
  }


  function hideSM(){
    $("#sm-menu").hide();
  }