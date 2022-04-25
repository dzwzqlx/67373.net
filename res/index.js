// https://skalman.github.io/UglifyJS-online/
// console.log(document.URL);

document.title = document.title.replace("2022", new Date().getFullYear()); // 换成今年
function nightModeFunction(thisNode) {
  var oldClass = document.querySelector("html").getAttribute("class");
  var oldClass2 = document
    .querySelector("#invertBackGround")
    .getAttribute("class");
  console.log(oldClass, oldClass2);
  if (thisNode.innerHTML == "开灯") {
    document
      .querySelector("html")
      .setAttribute("class", oldClass.replace(" htmlNightMode", ""));
    // document.querySelector("#invertBackGround").setAttribute("class", oldClass2.replace(" htmlNightMode", ""));
    document.querySelector("#invertBackGround").style.backgroundColor = "white";
    thisNode.innerHTML = "关灯";
  } else {
    document
      .querySelector("html")
      .setAttribute("class", oldClass + " htmlNightMode");
    document.querySelector("#invertBackGround").style.backgroundColor = "black";
    thisNode.innerHTML = "开灯";
  }
}
var addOpacityInterval;
window.onload = function () {
  var bodyNode = document.querySelector("html"); // 用html 不用body，是因为rem是基于html的
  bodyNode.style.fontSize =
    parseFloat(window.getComputedStyle(bodyNode).width) / 24 + "px";
};

function nodeAlert( thisNode ){
  alert( thisNode.getAttribute("alerttext") )
}

function woHaoLe(thisNode, nodeText) {
  navigator.clipboard.writeText( thisNode.getAttribute("copytext") )
  thisNode.style.backgroundColor = "lightgray";
  thisNode.innerHTML = "我好了";
  setTimeout(() => {
    thisNode.innerHTML = nodeText || "复制";
    thisNode.style.backgroundColor = "white";
    thisNode.onmouseover = function () {
      this.style.backgroundColor = "lightgray";
    };
    thisNode.onmouseout = function () {
      this.style.backgroundColor = "white";
    };
  }, 1000);
}
function changeOpacy(thisNode) {
  thisNode = thisNode.parentNode;
  thisNode.querySelector(".popDown").style.opacity = 0;
  if (thisNode.open) {
    if (addOpacityInterval) {
      clearInterval(addOpacityInterval);
    }
    return;
  } else {
    var nowOpacity = 0;
    addOpacityInterval = setInterval(() => {
      nowOpacity += 0.05;
      thisNode.querySelector(".popDown").style.opacity = nowOpacity;
      if (nowOpacity >= 1) {
        clearInterval(addOpacityInterval);
      }
    }, 20);
  }
}
