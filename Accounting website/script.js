// Toggle visibility for categories (main sections)
document.querySelectorAll("section h2").forEach((header) => {
    header.addEventListener("click", () => {
        const section = header.parentElement; // Get the parent <section>
        section.classList.toggle("open"); // Add/remove the "open" class
    });
});

// Toggle visibility for expandable subcategories
document.querySelectorAll("li").forEach((item) => {
    // Check if the <li> has a nested <ul> (expandable)
    const nestedList = item.querySelector("ul");
    if (nestedList) {
        item.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event from propagating to parent elements
            item.classList.toggle("open"); // Add/remove the "open" class
        });
    }
});
