/**
 * Created by srujangopu on 7/29/17.
 */
app.controller('ContactsController',["$scope","ContactsService", function($scope, ContactsService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    ContactsService.getContacts().then(function(data){
        $scope.contactResults = data.data
        console.log($scope.contactResults)
    });
}]);

app.filter('favorite', function() {
    return function( items, favorite ) {
        var filtered = [];
        angular.forEach(items, function(item) {
            if(favorite == item.isFavorite ) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});