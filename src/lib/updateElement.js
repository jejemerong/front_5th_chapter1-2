import { addEvent, removeEvent } from "./eventManager";
import { createElement } from "./createElement.js";

function updateAttributes(target, originNewProps, originOldProps) {
  // 기존 이벤트 제거
  for (const [key] of Object.entries(originOldProps)) {
    if (key.startsWith("on") && !(key in originNewProps)) {
      const eventType = key.slice(2).toLowerCase();
      removeEvent(target, eventType);
    }
  }

  // 새 이벤트 추가
  for (const [key, value] of Object.entries(originNewProps)) {
    if (key.startsWith("on")) {
      const eventType = key.slice(2).toLowerCase();
      if (!originOldProps || originOldProps[key] !== value) {
        addEvent(target, eventType, value);
      }
    } else {
      target.setAttribute(key, value);
    }
  }
}

export function updateElement(target, newNode, oldNode, index = 0) {
  if (!oldNode) {
    // 새로운 노드 추가
    target.appendChild(createElement(newNode));
    return;
  }

  const childNodes = target.childNodes;
  if (!newNode) {
    // 기존 노드 제거
    target.removeChild(childNodes[index]);
    return;
  }

  if (typeof newNode !== typeof oldNode || newNode.type !== oldNode.type) {
    // 노드가 다르면 교체
    target.replaceChild(createElement(newNode), childNodes[index]);
    return;
  }

  // 텍스트 노드
  if (typeof newNode === "string") {
    if (newNode !== oldNode) {
      childNodes[index].nodeValue = newNode;
    }
    return;
  }

  // 속성 업데이트
  updateAttributes(childNodes[index], newNode.props, oldNode.props);

  // 자식 노드 업데이트
  const newChildren = newNode.children || [];
  const oldChildren = oldNode.children || [];
  const max = Math.max(newChildren.length, oldChildren.length);
  for (let i = 0; i < max; i++) {
    updateElement(childNodes[index], newChildren[i], oldChildren[i], i);
  }
}
