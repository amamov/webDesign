const container = document.getElementById("container");
// const box = container.querySelector(".box");
let is_drag = false;
let offset = { x: 0, y: 0 };
let current = null;

// offset: 이벤트가 걸려 있는 DOM객체를 기준인 좌표
// client: 브라우저가 기준인 좌표
// page: 문서가 기준인 좌표

container.onmousedown = (event) => {
  if (event.target.classList.contains("box")) {
    is_drag = true;
    current = event.target;
    offset.x = event.offsetX;
    offset.y = event.offsetY;
  }
};

container.onmousemove = (event) => {
  if (is_drag) {
    current.style.position = "absolute";
    current.style.left = `${event.pageX - offset.x}px`;
    current.style.top = `${event.pageY - offset.x}px`;
  }
};

container.onmouseup = (event) => {
  is_drag = false;
};

current.onmousedown = (event) => {
  offset.x = event.offsetX;
  offset.y = event.offsetX;
};
