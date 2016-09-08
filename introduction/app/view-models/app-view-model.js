function AppViewModel() {
    var self = this;

    self.firstName = ko.observable('Bert');
    self.lastName = ko.observable('Bertingon');
    self.fullName = ko.computed(() => `${self.firstName()} ${self.lastName()}`, self);

    self.capitalizeLastName = function(){
        var currentValue = self.lastName();
        self.lastName(currentValue.toUpperCase());
    };
}
