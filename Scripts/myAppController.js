angular.module("myApp", [])
    .controller("myAppController", function() {
        var vm = this;
        vm.list = [];
        for(var i = 0;i<101;i++){
            vm.list.push({name: 'elem' + i, value: true});
        }
    })