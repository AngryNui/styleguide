var button=function(){"use strict";function t(t){const o={selector:"body",scope:document};this.options=Object.assign({},o,t)}function o(o){t.call(this,o);const e={selector:".button",scope:document};this.options=Object.assign({},e,o)}return window.addEventListener("load",function(){new button}),t.prototype.subscribe=function(t,o){const e=this,{scope:n,selector:s}=e.options;n.querySelectorAll(s).forEach(n=>{n.addEventListener(t,t=>{t.stopPropagation(),o.notify(e,t.type)},!0)})},o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o}();
//# sourceMappingURL=button.js.map
