(function() {
  'use strict';

  angular
    .module('testMirusDesk')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$scope, $q, $element) {
    var vm = this;



    vm.list1 = [{title: 'Блок'}];
    vm.list2 = [];
    vm.drows = [];

    vm.beforeDrop = function(){

      var deferred = $q.defer();
      deferred.resolve();
      //deferred.reject();

      return deferred.promise;
    }

    vm.newDraw = undefined;
    vm.setDrow = function(e,item){
      console.log(item);
      console.log(e)
      console.log(e.target.style.top)
      console.log(e.target.style.left)

      if (vm.newDraw){
        vm.newDraw.finish = {
          "top":e.target.style.top,
          "left": e.target.style.left
        }
        vm.drows.push(vm.newDraw);
        vm.newDraw = undefined;
      }else{
        vm.newDraw = {}
        vm.newDraw.start = {
          "top":e.target.style.top,
          "left": e.target.style.left
        }
      }
    }

    vm.getStyleForArrow = function(item){
      var style;
      style = {
        "position":"absolute",
        "height":"3px",
        "background": "green",
        "text-align":"center",
        "transform-origin": "0 0"
      }

      // вычисляем длину стрелки
      var width;
      var x1,x2,y1,y2;
      x1 = parseInt(item.start.left);
      y1 = parseInt(item.start.top);
      x2 = parseInt(item.finish.left);
      y2 = parseInt(item.finish.top);
      width = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      style.width = width;


      // вычисляем угол наклона
      var rotate = Math.atan2(y2 - y1, x2 - x1);
      // Результат возвращается в радианах, поэтому преобазуем в градусы
      rotate = rotate*180/Math.PI;
      console.log(rotate);
      style.transform = "rotate("+rotate+"deg)";

      // вычисляем x
      var left;
      left = Math.abs(Math.sin(rotate)*x1);
      style.left = left+"px";

      // вычисляем y
      var top;
      top = Math.abs(Math.cos(rotate)*y1);
      style.top = top+"px";


      style.top = y1+"px";
      style.left = x1+"px";


      console.log(style);


      return style
    }

  }
})();
