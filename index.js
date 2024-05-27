function filterArticles(category) {
  const articles = document.querySelectorAll("main article");

  articles.forEach((article) => {
    if (
      category === "all" ||
      article.getAttribute("data-category") === category
    ) {
      article.style.display = "";
    } else {
      article.style.display = "none";
    }
  });
}
