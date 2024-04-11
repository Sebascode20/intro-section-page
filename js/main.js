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
  
  //Se desabilita el scroll vertical cuando se abre el menú
  document.body.style.overflowY = "hidden";
});

// Funcion que cierra el menú hamburguesa
$btnCloseMenuHamburger.addEventListener("click", () => {
  $navBar.classList.add("hidden");
  $btnMenuHamburger.classList.remove("hidden");
});

const featuresOptions = ["Todo List", "Calendar", "Reminders", "Planning"],
  companyOptions = ["History", "Our Team", "Blog"];

//Se añade funcionalidad a Features
$menuExpanded.addEventListener("click", () => {
  $menuExpanded.removeChild($menuExpanded.firstElementChild);
  const $featuresArrow = document.createElement("img");
  $featuresArrow.setAttribute("src", "images/icon-arrow-up.svg");
  $featuresArrow.setAttribute("alt", "arrow up");
  $featuresArrow.classList.add("inline-block", "px-3");
  $menuExpanded.appendChild($featuresArrow);

  const $ul = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

  //Se añaden los elementos del dropdown Features
  featuresOptions.forEach((el) => {
    const $li = document.createElement("li");
    const $icon = document.createElement("img");

    if (el === "Todo List") {
      $li.textContent = "Todo List";
      $icon.setAttribute("src", "images/icon-todo.svg");
      $icon.setAttribute("alt", "icon todo list");
      $li.appendChild($icon);
    } else if (el === "Calendar") {
      $li.textContent = "Calendar";
      $icon.setAttribute("src", "images/icon-calendar.svg");
      $icon.setAttribute("alt", "icon todo list");
      $li.appendChild($icon);
    } else if (el === "Reminders") {
      $li.textContent = "Reminders";
      $icon.setAttribute("src", "images/icon-reminders.svg");
      $icon.setAttribute("alt", "icon reminders");
      $li.appendChild($icon);
    } else if (el === "Planning") {
      $li.textContent = "Planning";
      $icon.setAttribute("src", "images/icon-planning.svg");
      $icon.setAttribute("alt", "icon planning");
      $li.appendChild($icon);
    }

    //Se aumenta el tamaño de los iconos de la lista de elementos de Features si ancho del viewport es 768px o más
    if (window.innerWidth >= 768) {
      $icon.classList.add("w-5");
      $li.classList.add("my-6");
    } else {
      $icon.classList.remove("w-5");
      $li.classList.add("my-4");
    }

    $icon.classList.add("inline", "float-start", "ms-5", "me-5");

    $fragment.appendChild($li);
  });

  $ul.appendChild($fragment);
  $menuExpanded.appendChild($ul);

  //Se intercambia la flecha del dropdown
  if ($menuExpanded.firstElementChild.getAttribute("alt") === null) {
    $menuExpanded.removeChild($menuExpanded.firstElementChild);
    $featuresArrow.setAttribute("src", "images/icon-arrow-down.svg");
    $featuresArrow.setAttribute("alt", "arrow down");
    $featuresArrow.classList.add("inline-block", "px-3");
    $menuExpanded.removeChild($ul);
  }

  //Se verifica el viewport del navegador para aumentar el tamaño de la flecha del dropdown
  if (window.innerWidth >= 768) {
    $featuresArrow.classList.add("w-10");
  }
});

//Se añade funcionalidad a Company
$menuExpanded2.addEventListener("click", () => {
  $menuExpanded2.removeChild($menuExpanded2.firstElementChild);
  const $companyArrow = document.createElement("img");
  $companyArrow.setAttribute("src", "images/icon-arrow-up.svg");
  $companyArrow.setAttribute("alt", "arrow up");
  $companyArrow.classList.add("inline-block", "px-3");
  $menuExpanded2.appendChild($companyArrow);

  const $ul2 = document.createElement("ul"),
    $fragment2 = document.createDocumentFragment();

  //Se añaden los elementos del dropdown Company
  companyOptions.forEach((el) => {
    const $li2 = document.createElement("li");

    if (el === "History") {
      $li2.textContent = "History";
    } else if (el === "Our Team") {
      $li2.textContent = "Our Team";
    } else if (el === "Blog") {
      $li2.textContent = "Blog";
    }

    if (window.innerWidth >= 768) {
      $li2.classList.add("my-6", "ms-5");
    } else {
      $li2.classList.remove("my-6", "ms-5");
      $li2.classList.add("my-4", "ms-5");
    }

    $fragment2.appendChild($li2);
  });

  $ul2.appendChild($fragment2);
  $menuExpanded2.appendChild($ul2);

  //Se intercambia la flecha del dropdown
  if ($menuExpanded2.firstElementChild.getAttribute("alt") === null) {
    $menuExpanded2.removeChild($menuExpanded2.firstElementChild);
    $companyArrow.setAttribute("src", "images/icon-arrow-down.svg");
    $companyArrow.setAttribute("alt", "arrow down");
    $companyArrow.classList.add("inline-block", "px-3");
    $menuExpanded2.removeChild($ul2);
  }

  ////Se verifica el viewport del navegador para aumentar el tamaño de la flecha del dropdown
  if (window.innerWidth >= 768) {
    $companyArrow.classList.add("w-10");
  }
});
