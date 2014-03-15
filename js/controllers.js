'use strict';

/*Controllers*/

app.controller('HomeCtrl', function($scope, GroupService, TaskService){
	$scope.users = GroupService.getUsers();
	$scope.tasks = TaskService.getTasks();
})
app.controller('TasksCtrl',function($scope,TaskService,GroupService){
	$scope.tasks = TaskService.getTasks();

	$scope.addTask = function(task){
		task.status = "open";
		TaskService.addTask(task);
		$scope.task = '';
	}

	$scope.removeTask = function(task){
		TaskService.removeTask(task);
	}

	$scope.users = GroupService.getUsers();

})
app.controller('GroupCtrl',function($scope, GroupService){
	$scope.users = GroupService.getUsers();

	$scope.addUser = function(user){
		GroupService.addUser(user);
		$scope.newUser = '';
	}

	$scope.removeUser = function(user){
		GroupService.removeUser(user);
	}
})