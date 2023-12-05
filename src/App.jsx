import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/routes/HomePage";
import Account from "./components/routes/Account";
import StockSearch from "./components/routes/StockSearch";
import CompanyStockPage from "./components/routes/CompanyStockPage";
import EndSummary from "./components/routes/EndSummary";

function App() {
  const pages = ["Home", "Account Start", "Stock Search", "End Summary"];
  return (
    <div className="App">
      <NavigationBar pages={pages} />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="account" element={<Account />} />
          <Route path="stocks" element={<StockSearch />} />
          <Route path="stocks/*" element={<CompanyStockPage />} />
          <Route path="summary" element={<EndSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
