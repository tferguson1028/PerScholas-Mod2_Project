import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//% Routes
import HomePage from "./components/routes/HomePage";
import Account from "./components/routes/Account";
import Login from "./components/routes/Login";
// import SignUp from "./components/routes/SignUp";
import StockSearch from "./components/routes/StockSearch";
import CompanyStockPage from "./components/routes/CompanyStockPage";
import EndSummary from "./components/routes/EndSummary";

import pages from "./models/pages";
import {useEffect} from "react";

function App() 
{
  // Setting default localStorage params.
  function setupLocalStorage()
  {
    // if(localStorage.getItem("loginStatus") === null)
      // localStorage.setItem("loginStatus", false);
    if(
      localStorage.getItem("accountCompanyStack") === null ||
      typeof localStorage.getItem("accountCompanyStack") === "undefined"
    )
    {
        
      localStorage.setItem("accountCompanyStack", []);
    }
    
    if(
      localStorage.getItem("accountBalanceInitial") === null ||
      typeof localStorage.getItem("accountBalanceInitial") === "undefined"
    )
    {
      localStorage.setItem("accountBalanceInitial", 0);
    }
  }

  useEffect(() => {setupLocalStorage()}, []);

  return (
    <div className="App">
      <NavigationBar />
      <main className="MainPage">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path={pages.homePage.path} element={<HomePage />} />
            <Route path={pages.accountPage.path} element={<Account />} />
            <Route path={pages.accountPage.path+"/"+pages.accountPage.sub.login.path} element={<Login pageText={"Log In"}/>} />
            <Route path={pages.accountPage.path+"/"+pages.accountPage.sub.signup.path} element={<Login pageText={"Sign Up"}/>} />
            <Route path={pages.stockSearchPage.path} element={<StockSearch />} />
            <Route path={pages.stockSearchPage.path+"/*"} element={<CompanyStockPage />} />
            <Route path={pages.summaryPage.path} element={<EndSummary />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <span>Icons by <a href="https://icons8.com">Icons8</a></span>
      </footer>
    </div>
  );
}

export default App;
