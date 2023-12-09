const pages = {
  homePage: { textContent: "Home", path: "home"},
  accountPage: { textContent: "Account", path: "account", sub: {
    login: { textContent: "Login", path: "login" },
    signup: { textContent: "Sign Up", path: "signup" }
  }},
  stockSearchPage: { textContent: "Stock Search", path: "stocks"},
  summaryPage: { textContent: "Summary", path: "summary"}
};

module.exports = pages;
