function ContactController() {
  var vm = this;
  vm.name = 'Contact';
  vm.email = 'contact@contact.com';
  vm.phone = '1234567890';

  this.changeName = function() {
    vm.name = 'Something else!';
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);