let categorySwitch = document.getElementsByClassName("ctr_switchCategory")[0];
let categoryMain = document.getElementsByClassName("ctr_category")[0];

let changeCategory = categorySwitch.getElementsByTagName("a");

for (
  let categoriesTotal = 0;
  categoriesTotal < changeCategory.length;
  categoriesTotal++
) {
  changeCategory[categoriesTotal].addEventListener("click", function () {
    categorySwitch
      .getElementsByClassName("activeCategory")[0]
      .classList.remove("activeCategory");

    changeCategory[categoriesTotal].classList.add("activeCategory");

    categoryMain
      .getElementsByClassName("showCategory")[0]
      .classList.remove("showCategory");

    categoryMain
      .getElementsByTagName("div")
      [categoriesTotal].classList.add("showCategory");
  });
}

let contentSwitch = document.getElementsByClassName("ctr_switchContent")[0];
let contentMain = document.getElementsByClassName("ctr_novelContent")[0];

let changeContent = contentSwitch.getElementsByTagName("a");

for (
  let contentTotal = 0;
  contentTotal < changeContent.length;
  contentTotal++
) {
  changeContent[contentTotal].addEventListener("click", function () {
    contentSwitch
      .getElementsByClassName("activeContent")[0]
      .classList.remove("activeContent");

    changeContent[contentTotal].classList.add("activeContent");

    contentMain
      .getElementsByClassName("showContent")[0]
      .classList.remove("showContent");

    contentMain
      .getElementsByClassName("ct_wrapper")
      [contentTotal].classList.add("showContent");
  });
}

let listVolumes = document.getElementsByClassName("btn_bookflip");
let volumeTotal;

for (volumeTotal = 0; volumeTotal < listVolumes.length; volumeTotal++) {
  listVolumes[volumeTotal].addEventListener("click", function () {
    this.classList.toggle("activeBook");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
