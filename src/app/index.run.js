(function() {
  'use strict';

  angular
    .module('testMirusDesk')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
