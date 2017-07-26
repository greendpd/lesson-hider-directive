app.directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',

    scope: {
      lesson: '=',
      dayAlert: '&'
    },

    controller: function($scope, lessonSrvc) {
      $scope.getSchedule = lessonSrvc.getSchedule();

    },

    link: function(scope, element, attributes) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        scope.schedule.forEach(function(cur,i,arr){
          if(cur.lesson===scope.lesson){
            element.css('text-decoration','line-through');
            scope.lessonDay=cur.weekday;
            return;

          }
        });
      });
    }
  }

})
