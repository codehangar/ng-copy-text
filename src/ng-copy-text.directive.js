'use strict';

angular
  .module('ngCopyText')
  .directive('appVersion', [
    'version', function (version) {
      return function (scope, elm) {
        elm.text(version);
      };
    }
  ]);

'use strict';

/**
 * Directive for adding copy-to-clipboard functionality to elements
 * @class
 * @name CopyToClipboard
 */
angular
  .module('ngCopyText')
  .directive('copyText', [
    '$timeout', function ($timeout) {

      var setSelection = function (element) {
        if (element[0].nodeName === 'INPUT' || element[0].nodeName === 'TEXTAREA') {
          element.select();
        } else {
          try {
            var range, selection;
            if (window.getSelection && document.createRange) {
              selection = window.getSelection();
              range = document.createRange();
              range.selectNodeContents(element[0]);
              selection.removeAllRanges();
              selection.addRange(range);
            } else if (document.selection && document.body.createTextRange) {
              range = document.body.createTextRange();
              range.moveToElementText(element[0]);
              range.select();
            }
          } catch (e) {
            element.select();
          }
        }
      };

      var copyText = function (element) {
        try {
          var successful = document.execCommand('copy');
          if (successful) {
            var popup = angular.element('<div>Copied!</div>');
            popup.addClass('alert alert-success');
            popup.css('z-index', '100000000');
            popup.css('position', 'fixed');
            popup.css('top', '20px');
            popup.css('left', '50%');
            popup.css('margin-left', '-' + (popup.width() / 2));
            angular.element('body').append(popup);

            // Fade Out
            $timeout(function () {
              popup.css('-webkit-transition', 'opacity 2s'); // For Safari 3.1 to 6.0
              popup.css('transition', 'opacity 2s');
              popup.css('opacity', '0');
              $timeout(function () {
                popup.remove();
                element.removeClass('clicked');
              }, 2000);
            }, 1000);
          } else {

          }
        } catch (err) {
        }
      };

      return {
        scope: {},
        link: function (scope, element) {
          element.on('click', function () {
            setSelection(element);
            copyText(element);
          });
        }
      };
    }
  ]);