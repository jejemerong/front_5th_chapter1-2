// import { addEvent } from "./eventManager";
import { isNotFalsy } from "./normalizeVNode";

export function createElement(vNode) {
  if (!isNotFalsy(vNode)) {
    return document.createTextNode("");
  }

  if (typeof vNode === "number" || typeof vNode === "string") {
    return document.createTextNode(String(vNode));
  }

  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach((el) => {
      const tag = createElement(el); // 배열 안 요소 재귀
      fragment.appendChild(tag);
    });
    return fragment;
  }

  if (typeof vNode.type === "function") {
    throw new Error("컴포넌트 정규화가 필요합니다 :-)");
  }

  const { type, props, children } = vNode;
  const tag = document.createElement(type);

  if (props) {
    // 요소 꺼내서 속성 추가
    for (const [key, value] of Object.entries(props)) {
      if (key === "className") {
        tag.setAttribute("class", value);
      } else {
        tag.setAttribute(key, value);
      }
    }
  }

  children.forEach((el) => {
    tag.appendChild(createElement(el));
  });
  return tag;
}

// function updateAttributes(key, value) {} // 이거 안써도 되잖아 그치
