setInterval(() => {
    date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    hrotation=30 * h + m/2;
    mrotation=6 * m;
    srotation=6 * s;
    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;
}, 1000);

const DOMCOntroller = (() => {
  const DOMElems = {
    rangeSlider: document.getElementById("myRange"),
    root: document.getElementById("root")
  };

  return {
    DOMElems
  };
})();

const UIController = (() => {
  const { rangeSlider, root } = DOMCOntroller.DOMElems;

  rangeSlider.addEventListener("change", (e) => {
    rangeSlider.style.background = `linear-gradient(90deg, #C5CAED ${e.target.value}%, #fefefe 0)`;

    root.style.backgroundColor = `rgba(0,0,0, ${1 - e.target.value / 100})`;
  });
})();