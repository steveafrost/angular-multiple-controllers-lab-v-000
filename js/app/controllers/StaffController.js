function StaffController() {
  var vm = this;

  vm.name = 'Staff Name';
  vm.email = 'staff@staff.com';
  vm.phone = '0987654321';
}

angular
  .module('app')
  .controller('StaffController', StaffController);