var $window=jQuery(window);var scrollTime=0.4;var scrollDistance=300;mobile_ie=-1!==navigator.userAgent.indexOf("IEMobile");function smoothScrollListener(event){event.preventDefault();var delta=event.wheelDelta/120||-event.detail/3;var scrollTop=$window.scrollTop();var finalScroll=scrollTop-parseInt(delta*scrollDistance);TweenLite.to($window,scrollTime,{scrollTo:{y:finalScroll,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5});}
if(!jQuery('html').hasClass('touch')&&!mobile_ie){if(window.addEventListener){window.addEventListener('mousewheel',smoothScrollListener,{passive:false});}}