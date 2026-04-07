const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");

    accordionContents.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
        // ✅ Baaki sab items se open class hatao
        content.parentElement.classList.remove("open");
      }
    });

    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      // ✅ Is item ko open mark karo
      accordionItem.classList.add("open");
    } else {
      accordionContent.style.maxHeight = "0";
      // ✅ Band hone par open class hatao
      accordionItem.classList.remove("open");
    }
  });
});




// const hamburger = document.getElementById("hamburger");
// const mobileMenu = document.getElementById("mobileMenu");

// hamburger.addEventListener("click", () => {
//   mobileMenu.classList.toggle("active");
// });


///////////////////////////////////////////////////////////
// Make mobile navigation work


  const btnNav = document.querySelector(".btn-mobile-nav");
  const header = document.querySelector("header");

  btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
