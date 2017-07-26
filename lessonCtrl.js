app.controller('lessonCtrl', function($scope,lessonSrvc){
  $scope.lessons=['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test='Two-way data binding!!!!';

  $scope.announceDay=function(lesson, day){
    var theAlert="";
    if(day){
      theAlert=lesson+' is active on ' + day+ '.';
    }else{
      theAlert=lesson +' is not yet scheduled.';
    }
    alert(theAlert);

  }
})
