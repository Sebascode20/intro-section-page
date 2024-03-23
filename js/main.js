const $btnMenuHamburger = document.getElementById("open-menu"),
  $btnCloseMenuHamburger = document.getElementById("close-menu"),
  $navBar = document.getElementById("nav-bar"),
  $headerPage = document.getElementById("header"),
  $listMenu = document.getElementById("list-menu"),
  $menuExpanded = document.getElementById("menu-expanded"),
  $menuExpanded2 = document.getElementById("menu-expanded-2");

  // Funcion que abre menú hamburguesa
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

// Funcion que cierra el menú hamburguesa
$btnCloseMenuHamburger.addEventListener("click", () => {
  $navBar.classList.add("hidden");
  $btnMenuHamburger.classList.remove("hidden");
});

const options = ["Todo List", "Calendar", "Reminders", "Planning"],
  options2 = ["History", "Our Team", "Blog"];

$menuExpanded.addEventListener("click", () => {
  $menuExpanded.removeChild($menuExpanded.firstElementChild);
  const $img = document.createElement("img");
  $img.setAttribute("src", "images/icon-arrow-up.svg");
  $img.setAttribute("alt", "arrow up");
  $img.classList.add("inline-block", "px-3");
  $menuExpanded.appendChild($img);
  const $ul = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

  //Se añaden los elementos del dropdown Features
  options.forEach((el) => {
    const $li = document.createElement("li");
    const $img2 = document.createElement("img");

    if (el === "Todo List") {
      $li.textContent = "Todo List";
      $img2.setAttribute("src", "images/icon-todo.svg");
      $img2.setAttribute("alt", "icon todo list");
      $li.appendChild($img2);
    } else if (el === "Calendar") {
      $li.textContent = "Calendar";
      $img2.setAttribute("src", "images/icon-calendar.svg");
      $img2.setAttribute("alt", "icon todo list");
      $li.appendChild($img2);
    } else if (el === "Reminders") {
      $li.textContent = "Reminders";
      $img2.setAttribute("src", "images/icon-reminders.svg");
      $img2.setAttribute("alt", "icon reminders");
      $li.appendChild($img2);
    } else if (el === "Planning") {
      $li.textContent = "Planning";
      $img2.setAttribute("src", "images/icon-planning.svg");
      $img2.setAttribute("alt", "icon planning");
      $li.appendChild($img2);
    }

    $li.classList.add("my-4");

    $img2.classList.add("inline", "float-start", "ms-5", "me-5");

    $fragment.appendChild($li);
  });
  $ul.appendChild($fragment);
  $menuExpanded.appendChild($ul);
});
