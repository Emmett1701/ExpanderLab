var Expander = {};

Expander.makeExpander = function(root){
   if(root.innerHTML.trim() !== "")
      root.classList.add('root')
   for (var i = 0; i<root.children.length; i++) {
      var text = root.children[i].innerHTML;
      var style = root.children[i].getAttribute("style");
      root.children[i].removeAttribute("style");
      root.children[i].innerText = "";

      var section = root.children[i];
      section.insertAdjacentHTML("afterbegin", '<divs class="expanderBody '
         + section.className + '">' + text + '</div>');
      section.children[0].setAttribute("style", style);
      section.insertAdjacentHTML("afterbegin", '<div class="open">'
         + section.title + '</div>');
      section.insertAdjacentHTML("afterbegin",
         '<img src="up.png" class="buttons"></img>' +
         '<img src="down.png" class="buttons"></img>');
      section.removeAttribute("class");
      section.children[0].setAttribute('onclick', 'moveUp(event)');
      section.children[1].setAttribute('onclick', 'moveDown(event)');
      section.children[2].setAttribute('onclick', 'toggleCollapse(event)');
   }
}
function toggleCollapse(e) {
   var elem = e.target;
   var parent = e.target.parentElement;
   if (e.target.className === "closed") {
      parent.children[3].classList.remove("contracted");
      elem.classList.remove("closed");
      elem.classList.add("open");
   }
   else {
      parent.children[3].classList.add("contracted");
      elem.classList.remove("open");
      elem.classList.add("closed");
   }
}
function moveUp(e) {
   console.log("moveUp");
   var parent = e.target.parentElement;
   var previous = parent.previousElementSibling;
   if(previous)
      previous.insertAdjacentElement('beforebegin', parent);
}
function moveDown(e) {
   console.log("moveDown");
   var parent = e.target.parentElement;
   var next = parent.nextElementSibling;
   if(next)
      next.insertAdjacentElement('afterend', parent);
}