import { createElement } from "./createElement";
import { setupEventListeners } from "./eventManager";
import { normalizeVNode } from "./normalizeVNode";
import { updateElement } from "./updateElement";

export function renderElement(vNode, container) {
  const initElement = container.firstChild;
  const normalizedNode = normalizeVNode(vNode);

  if (!initElement) {
    const node = createElement(normalizedNode);
    container.appendChild(node);
  } else {
    updateElement(container, normalizedNode, initElement);
  }

  setupEventListeners(container);
}
