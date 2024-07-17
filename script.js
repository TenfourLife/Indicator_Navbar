// Select all link items
const customLinkItems = document.querySelectorAll(".link-item");

customLinkItems.forEach((customLinkItem, customIndex) => {
  // Add click event listener to each link item
  customLinkItem.addEventListener("click", () => {
    // Remove the active class from the currently active item
    document.querySelector(".active").classList.remove("active");
    // Add the active class to the clicked item
    customLinkItem.classList.add("active");

    // Select the indicator element
    const customIndicator = document.querySelector(".indicator");
    // Move the indicator to the clicked item
    customIndicator.style.left = `${customIndex * 95 + 48}px`;
  });
});
