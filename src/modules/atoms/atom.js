
export default function Atom(options) {
  const defaults = {
    selector: 'body',
    scope: document,
  };

  this.options = Object.assign({}, defaults, options);

  // console.log('hello world');
}

Atom.prototype.subscribe = function subscribe(eventType, parent) {
  const self = this;
  const { selector } = self.options;

  const nodes = document.querySelectorAll(selector);

  nodes.forEach((node) => {
    node.addEventListener(eventType, (event) => {
      event.stopPropagation();
      parent.notify(self, event.type);
    }, true);
  });
};
