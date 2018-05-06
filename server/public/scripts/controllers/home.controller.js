myApp
    .controller('HomeController', function (UserService, BankService, $mdDialog) {
        console.log('HomeController created');
        var vm = this;
        vm.userService = UserService;
        vm.bankService = BankService;

        vm.accounts = BankService.accounts;

        vm.getAccounts = () => {
            BankService.getAccounts();
        };

        vm.accAdder = () => {
            $mdDialog.show({templateUrl: '../views/templates/accAdder.html', controller: 'HomeController as hc', clickOutsideToClose: true, escapeToClose: true})
        };

        vm.getAccounts();
    });
