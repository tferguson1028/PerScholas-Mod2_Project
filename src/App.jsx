import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//% Routes
import HomePage from "./components/routes/HomePage";
import Account from "./components/routes/Account";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/SignUp";
import StockSearch from "./components/routes/StockSearch";
import CompanyStockPage from "./components/routes/CompanyStockPage";
import EndSummary from "./components/routes/EndSummary";

import pages from "./models/pages";

function App() 
{
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={pages.homePage.path} element={<HomePage />} />
          <Route path={pages.accountPage.path} element={<Account />} />
          <Route path={pages.accountPage.path+"/login"} element={<Login />} />
          <Route path={pages.accountPage.path+"/signup"} element={<SignUp />} />
          <Route path={pages.stockSearchPage.path} element={<StockSearch />} />
          <Route path={pages.stockSearchPage.path+"/*"} element={<CompanyStockPage />} />
          <Route path={pages.summaryPage.path} element={<EndSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
