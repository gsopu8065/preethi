/**
 * Created by srujangopu on 7/29/17.
 */
var app = angular.module('myApp', []);
app.factory("ContactsService",["$http",
    function($http) {

        var ContactsService = {};

        ContactsService.getContacts = function () {
            return $http.get("https://s3.amazonaws.com/technical-challenge/v3/contacts.json")
        };

        return ContactsService;
    }
])