// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Market from "./Market/Market";
import GoldETF from "./GoldETF/GoldETF";
import Stocktable from "./StockList/StockList";
import ProfitLossTable from "./ProfitLossTable/ProfitLossTable";
import BalanceSheet from "./BalanceSheet/BalanceSheet";
import Header from "./header/header";
import Overview from "./StockOverview/Overview";

import Smallcap from "./Smallcapstock/Smallcapstock";
import Midcap from "./Midcapstock/Midcapstock";
import Largecap from "./Largecapstock/Largecapstock";
import NiftyStocks from "./Nifty50stock/Nifty50stock";
import Highstock from "./Highstock/Highstock";
import Beststock from "./Beststock/Beststock";
import Netify500 from "./NiftyStocksTable/NiftyStocksTable";
import Portfolio from "./Portfoilo/Portfoliomanager/Portfoliomanager";
import NetWorthStocksDashboard from "./Portfoilo/NetWorthStocksDashboard/NetWorthStocksDashboard";
import PortfolioAccountStock from "./Portfoilo/PortfolioAccountStock/PortfolioAccountStock";
import AccountStockfundamental from "./Portfoilo/AccountStockfundamental/AccountStockfundamental";
import AccountStockalert from "./Portfoilo/AccountStockalerts/AccountStockalerts";
import AccountStockreturn from "./Portfoilo/AccountStockreturn/AccountStockreturn";
import Portfoliodonut from "./Portfoilo/Portfoliodonut/Portfoliodonut";
import OverviewPortfolioManager from "./Portfoilo/OverviewPortfoliograph/OverviewPortfoliograph";
import PortfolioStocksector from "./Portfoilo/PortfolioStocksector/PortfolioStocksector";
import PortfolioStockmcap from "./Portfoilo/PortfolioStockmcap/PortfolioStockmcap";
import AddTransactionstock from "./Portfoilo/AddTransactionstock/AddTransactionstock";
import Deletepopupstock from "./Portfoilo/Deletepopupstock/Deletepopupstock";

import UpdateTransaction from "./Portfoilo/UpdateTransactionstock/UpdateTransactionstock";
import Mutualnone from "./Portfoilo/Mutualnone/Mutualnone";
import Mutualtypefund from "./Portfoilo/Mutualtypefund/Mutualtypefund";
import Mutualsector from "./Portfoilo/Mutualsector/Mutualsector";
import MutualAccountStock from "./Portfoilo/Mutualtransaction/Mutualtransaction";
import OverviewMutual from "./Portfoilo/Mutualoverview/Mutualoverview";
import Accountmutualperformance from "./Portfoilo/Mutualperformance/Mutualperformance";

import StockWatchlistsector from "./Portfoilo/StockWatchlistsector/StockWatchlistsector";
import StockWatchlistmcap from "./Portfoilo/StockWatchlistmcap/StockWatchlistmcap";
import StockWatchlist from "./Portfoilo/StockWatchlist/StockWatchlistnone";
import StockWatchlistall from "./Portfoilo/StockWatchlistall/StockWatchlistall";
import StockWatchlistgain from "./Portfoilo/StockWatchlistgainer/StockWatchlistgainer";
import StockWatchlistloss from "./Portfoilo/StockWatchlistloss/StockWatchlistloss";

import SubscriptionPlans from "./Subscription/PricingTablehalfyear/PricingTablehalfyear";
import SubscriptionannualPlans from "./Subscription/Subscriptionannualplan/Subscriptionannualplan";
import Premiumplanhalfyear from "./Subscription/Premiumplanhalfyear/Premiumplanhalfyear";
import TopRatedFunds from "./MutualFund/TopRatedFunds/TopRatedFunds";
import TopRatedFundsdirect from "./MutualFund/TopRatedFundsdirect/TopRatedFundsdirect";
import GoldWatchportall from "./Portfoilo/Goldwatchlistall/Goldwatchlistall";
import Portfoliogoldaccount from "./Portfoilo/Portfoliogoldaccount/Portfoliogoldaccount";
import MutualWatchportall from "./Portfoilo/Mutualwatchportall/Mutualwatchportall";



function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market/>} />
      <Route path="/gold" element={<GoldETF/>} />
      <Route path="/stock" element={<Stocktable/>} />
      <Route path="/header" element={<Header/>} />
      <Route path="/profitloss" element={<ProfitLossTable/>} />
      <Route path="/balance-sheet" element={<BalanceSheet/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/stockhandle" element={<Overview/>} />
      <Route path="/nifty" element={<Netify500/>} />
      <Route path="/smallcap" element={<Smallcap/>} />
      <Route path="/midcap" element={<Midcap/>} />
      <Route path="/largecap" element={<Largecap/>} />
      <Route path="/niftystock" element={<NiftyStocks/>} />
      <Route path="/highgrowth" element={<Highstock/>} />
      <Route path="/beststock" element={<Beststock/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/portfoliostock" element={<NetWorthStocksDashboard/>} />
      <Route path="/portfoliodonut" element={<Portfoliodonut/>} />
     <Route path="/portfoliostockaccount" element={<PortfolioAccountStock/>} />
      <Route path="/accountfund" element={<AccountStockfundamental/>} />
      <Route path="/accountalert" element={<AccountStockalert/>} />
      <Route path="/accountreturn" element={<AccountStockreturn/>} />
      <Route path="/overview" element={<OverviewPortfolioManager/>} />
      <Route path="/stocksector" element={<PortfolioStocksector/>} />
      <Route path="/stockmcap" element={<PortfolioStockmcap/>} />
      <Route path="/stockadd" element={<AddTransactionstock/>} />
      <Route path="/stockupdate" element={<UpdateTransaction/>} />
      <Route path="/stockdelete" element={<Deletepopupstock/>} />
      <Route path="/mutualsector" element={<Mutualsector/>} />
      <Route path="/mutualnone" element={<Mutualnone/>} />
      <Route path="/mutualtype" element={<Mutualtypefund/>} />
      <Route path="/mutualaccount" element={<MutualAccountStock/>} />
      <Route path="/mutualoverview" element={<OverviewMutual/>} />
      <Route path="/accountperformance" element={<Accountmutualperformance/>} />
      <Route path="/stockwatchlist" element={<StockWatchlist/>} />
      <Route path="/stockwatchlistsector" element={<StockWatchlistsector/>} />
      <Route path="/stockwatchlistmcap" element={<StockWatchlistmcap/>} />
      <Route path="/stockwatchlistall" element={<StockWatchlistall/>} />
      <Route path="/stockwatchlistgain" element={<StockWatchlistgain/>} />
      <Route path="/stockwatchlistloss" element={<StockWatchlistloss/>} />
      <Route path="/pricehalf" element={<SubscriptionPlans/>} />
      <Route path="/annualplan" element={<SubscriptionannualPlans/>} />
      <Route path="/annualyear" element={<Premiumplanhalfyear/>} />
      <Route path="/mutualfund" element={<TopRatedFunds/>} />
      <Route path="/mutualfunddirect" element={<TopRatedFundsdirect/>} />
      <Route path="/goldWatchlistall" element={<GoldWatchportall/>} />
      <Route path="/portfoliogoldtoppage" element={<Portfoliogoldaccount />} />
      <Route path="/mutualwatch" element={<MutualWatchportall />} />
     






      
    </Routes>
   
  );
}

export default App;
