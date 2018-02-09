myApp
    .service('BankService', function ($http, $location) {
        console.log('BankService Loaded');
        var self = this;
        self.accounts = {data: []};

        self.getAccounts = () => {
            $http.get('/bank').then((response) => {
                self.accounts.data = response.data;
            }).catch((err) => {
                console.log('Could not get accounts');
            });
        }

        self.addAccount = (accToAdd) => {
            
        }
    });