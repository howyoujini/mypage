(function () {
  const episodeElem = document.querySelector(".episode");
  const barElem = document.querySelector(".scroll__bar");
  const stageElem = document.querySelector(".stage");
  const mousePos = { x: 0, y: 0 };

  let currentItem;

  let maxScrollValue;

  // 리사이징 이벤트
  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }
  // window.addEventListener("resize", resizeHandler);

  // 스크롤 이벤트
  window.addEventListener("scroll", function () {
    //   maxScrollValue = document.body.offsetHeight - window.innerHeight;
    let scrollPer = scrollY / maxScrollValue;
    const zOffset = scrollPer * 800;

    episodeElem.style.transform = "translateZ(" + (zOffset - 350) + "vw)";

    barElem.style.width = scrollPer * 100 + "%";
  });

  window.addEventListener("mousemove", function (e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    stageElem.style.transform =
      "rotateX(" + mousePos.y * 3 + "deg) rotateY(" + mousePos.x * 3 + "deg)";
    // console.log(mousePos);
  });

  // 활성화
  function activate(elem) {
    elem.classList.add("door__opened");
    currentItem = elem;
  }
  // 비활성화
  function inactivate(elem) {
    elem.classList.remove("door__opened");
  }
  function doorHandler(e) {
    // 이벤트핸들러 안에 , 비활성화 둘다 있음

    const targetElem = e.target;

    // const currentItem = document.querySelector('.door-opened');

    if (currentItem) {
      // 비활성화 하는 기능
      inactivate(currentItem);
    }

    if (targetElem.classList.contains("door__body")) {
      // 활성화 하는 기능
      activate(targetElem.parentNode);
    }
    // targetElem.parentNode.classList.add('door-opened');
  }
  stageElem.addEventListener("click", doorHandler);
  //   activate(document.querySelector(".door:first-child"));

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
