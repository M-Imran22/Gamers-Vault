const $button = document.querySelector("#sidebar-toggle");
const $wrapper = document.querySelector("#wrapper");
const $links = document.querySelectorAll(
  "#sidebar-wrapper ul.sidebar-nav li a"
);

$button.addEventListener("click", (e) => {
  e.preventDefault();
  $wrapper.classList.toggle("toggled");
});

$links.forEach(($link) => {
  $link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all links
    document
      .querySelectorAll("#sidebar-wrapper ul.sidebar-nav li")
      .forEach(($li) => {
        $li.classList.remove("active");
        $li.querySelectorAll("ul li").forEach(($subLi) => {
          $subLi.classList.remove("active");
        });
      });

    // Add active class to the parent li of the clicked link
    if ($link.parentElement.parentElement.classList.contains("sidebar-nav")) {
      $link.parentElement.classList.add("active");
    } else {
      $link.parentElement.classList.add("active");
      $link.parentElement.parentElement.parentElement.classList.add("active");
    }
  });
});
