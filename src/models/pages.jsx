const pages = {
  homePage: { textContent: "Home", path: "home", icon: "home"},
  stockSearchPage: { textContent: "Stock Search", path: "stocks", icon: "analyze"},
  summaryPage: { textContent: "Evaluate", path: "evaluate", icon: "finance_history"},
  accountPage: { textContent: "Account", path: "account", icon: "account", sub: {
    login: { textContent: "Login", path: "login" },
    signup: { textContent: "Sign Up", path: "signup" }
  }}
};

module.exports = pages;
