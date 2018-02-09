myApp
    .controller('TransactionsController', function (UserService) {
        console.log('TransactionsController created');
        var vm = this;
        vm.userService = UserService;

        vm.openMenu = function ($mdMenu, ev) {
            originatorEv = ev;
            $mdMenu.open(ev);
        };
    });
