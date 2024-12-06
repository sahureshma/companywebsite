import React from 'react';
import { Container,Typography } from '@mui/material';
import { CandleStickChart } from './Candlestickchart/Candlestickchart';
import KeyIndicators from './KeyIndicators/KeyIndicators';
import Graphheader from '../header/header';
import Navbar from '../Navbar/Navbar';
import Stockxray from '../Stock10years/Stock10years';
import QuarterlyEarningsReport from '../EarningsReport/EarningsReport';
import Valuationmain from '../Stockvaluation/Valuemain/valuemain';
import { Link, Element } from 'react-scroll';
import FinancialDashboard from '../AnalysisFinancialDashboard/AnalysisFinancialDashboard';
import Analysis from '../Stockanalysisnote/Analysis/Analysis';
import ProfitLossTable from '../ProfitLossTable/ProfitLossTable'; // Corrected path
import BalanceSheet from '../BalanceSheet/BalanceSheet';
import CashFlowTable from '../CashFlowTable/CashFlowTable';
import RatioTable from '../RatioTable/RatioTable';
import NewsList from '../NewsList/NewsList';
import About from '../About/About';

import Stockpeer from '../Stockpeer/Stockpeer';

function Overview() {
  return (
    <Container>
      {/* Navbar with scroll links */}
      <Navbar />

      {/* Graph Header */}
      <Graphheader />

      <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Calibri',fontSize:'26px',fontWeight:'bold', marginTop:'20px',color:'#24b676'}}>
      Overview
    </Typography>

      {/* Navigation Links */}
      <nav>
        <ul>
            <Link to="overview" smooth={true} duration={500}></Link>
         
            <Link to="stockxray" smooth={true} duration={500}></Link>
          
            <Link to="stockearning" smooth={true} duration={500}></Link>
          
            <Link to="valuation" smooth={true} duration={500}></Link>
          
            <Link to="stockanalysis" smooth={true} duration={500}></Link>
          
            <Link to="analysis-notes" smooth={true} duration={500}></Link>
          
          
            <Link to="stockpeer" smooth={true} duration={500}></Link>
         
          
            <Link to="profitloss" smooth={true} duration={500}></Link>
          
          
            <Link to="balance-sheet" smooth={true} duration={500}></Link>
        
         
            <Link to="cashflow" smooth={true} duration={500}></Link>
        
          
            <Link to="ratios" smooth={true} duration={500}></Link>
          
         
            <Link to="news" smooth={true} duration={500}></Link>
        
         
            <Link to="about" smooth={true} duration={500}></Link>
      
        </ul>
      </nav>

      {/* Section: Overview */}
      <Element name="overview">
        <CandleStickChart />
        <KeyIndicators />
      </Element>
      {/* Section: Stock X-Ray */}
      <Element name="stockxray">
        <Stockxray />
      </Element>

      {/* Section: Quarterly Earnings Report */}
      <Element name="stockearning">
        <QuarterlyEarningsReport />
      </Element>

      {/* Section: Valuation */}
      <Element name="valuation">
        <Valuationmain />
      </Element>

      {/* Section: Financial Dashboard */}
      <Element name="stockanalysis">
        <FinancialDashboard />
      </Element>

      {/* Section: Analysis Notes */}
      <Element name="analysis-notes">
        <Analysis />
      </Element>

      {/* Section: Peer Analysis */}
      <Element name="stockpeer">
        <Stockpeer/>
      </Element>

      {/* Section: Profit & Loss */}
      <Element name="profitloss">
        <ProfitLossTable />
      </Element>

      {/* Section: Balance Sheet */}
      <Element name="balance-sheet">
        <BalanceSheet />
      </Element>

      {/* Section: Cash Flow */}
      <Element name="cashflow">
        <CashFlowTable />
      </Element>

      {/* Section: Ratios */}
      <Element name="ratios">
        <RatioTable />
      </Element>

      {/* Section: News */}
      <Element name="news">
        <NewsList />
      </Element>

      {/* Section: About */}
      <Element name="about">
        <About />
      </Element>
    </Container>
  );
}

export default Overview;
