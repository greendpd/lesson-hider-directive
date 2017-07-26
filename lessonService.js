app.service('lessonSrvc', function($http){
  this.getSchedule=function(){
    return $http.get('schedule.json');
  }

})
