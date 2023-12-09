const pages = {
  homePage: { textContent: "Home", path: "home"},
  stockSearchPage: { textContent: "Stock Search", path: "stocks"},
  summaryPage: { textContent: "Summary", path: "summary"},
  accountPage: { textContent: "Account", path: "account", sub: {
    login: { textContent: "Login", path: "login" },
    signup: { textContent: "Sign Up", path: "signup" }
  }}
};

module.exports = pages;
