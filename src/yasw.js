angular.module('YASW', [])
  .directive('initialFocus', function () {
    return {
      link: function (scope, element) {
        element[0].focus();
      }
    };
  })
  .directive('gamePolygon', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '' +
        '<g>' +
        '  <polygon' +
        '   ng-attr-points="{{polygon.polygon_string}}"' +
        '   ng-attr-stroke="{{polygon.color}}"' +
        '   stroke-width="2"' +
        '   fill="none"' +
        '  />' +
        '  <text' +
        '   ng-if="polygon.score"' +
        '   ng-attr-x="{{polygon.position[0]}}"' +
        '   ng-attr-y="{{polygon.position[1] - 20}}"' +
        '   ng-attr-fill="{{polygon.color}}">' +
        '  {{polygon.score}}' +
        '  </text>' +
        '</g>'
    };
  });
