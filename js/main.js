const $btnMenuHamburger = document.getElementById("open-menu"),
  $btnCloseMenuHamburger = document.getElementById("close-menu"),
  $navBar = document.getElementById("nav-bar"),
  $headerPage = document.getElementById("header"),
  $listMenu = document.getElementById("list-menu"),
  $menuExpanded = document.getElementById("menu-expanded"),
  $menuExpanded2 = document.getElementById("menu-expanded-2");

$btnMenuHamburger.addEventListener("click", () => {
  $navBar.classList.remove("hidden");
  $btnCloseMenuHamburger.classList.add(
    "absolute",
    "top-0",
    "right-0",
    "bottom-0",
    "p-4"
  );
  $headerPage.classList.remove("items-center");
  $headerPage.classList.add("items-start");
  $btnMenuHamburger.classList.add("hidden");
});

$btnCloseMenuHamburger.addEventListener("click", () => {
  $navBar.classList.add("hidden");
  $btnMenuHamburger.classList.remove("hidden");
});

const opciones = ["Todo List", "Calendar", "Reminders", "Planning"],
 opciones2 = ["History", "Our Team", "Blog"];

$menuExpanded.addEventListener("click", () => {
  $menuExpanded.removeChild($menuExpanded.firstElementChild);
  const $img = document.createElement("img");
  $img.setAttribute("src", "images/icon-arrow-up.svg");
  $img.setAttribute("alt", "arrow up");
  $img.classList.add("inline-block", "px-3");
  $menuExpanded.appendChild($img);
  const $ul = document.createElement("ul"),
  $fragment = document.createDocumentFragment();
  opciones.forEach((el) => {
      const $li = document.createElement("li");
      const $img2 = document.createElement("img"); 
      $li.textContent = el;
      /*$img2.setAttribute("src", "images/icon-todo.svg");
      $img2.setAttribute("alt", "icon todo list");
      $li.children[0].appendChild($img2);*/
      $fragment.appendChild($li);
  });
  $ul.appendChild($fragment);
  $menuExpanded.appendChild($ul);
})

