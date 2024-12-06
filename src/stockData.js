const stocks = [
  {
    "company": "ITI Ltd.",
    "ltp": "303.6",
    "change": "+13.86%",
    "marketCap": "₹25,622 Cr",
    "highLow": "384.4/210.2",
    "roe": "-27.34%",
    "pe": "0.0",
    "pbv": "15.13",
    "fiveYSalesGrowth": "-112.58%",
    "fiveYProfitGrowth": "-112.58%",
    "clarification": {
      "text": "know more",
      "url": "/stockhandle"  // Replace with the actual URL if available
    },
    "sector": "Telecom",
    "marketCapCategory": "Large cap",
    "index": "Nifty50"
  },
  {
    company: "Reliance Industries",
    ltp: "2,400",
    change: "-1.20%",
    marketCap: "₹15,00,000 Cr",
    highLow: "2,600/2,300",
    roe: "22%",
    pe: "25",
    pbv: "7.0",
    fiveYSalesGrowth: "8%",
    fiveYProfitGrowth: "9%",
    clarification: {
      text: "know more",
      url: "http://localhost:3000/stockhandle"
    },
    sector: "Energy",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "HDFC Bank",
    ltp: "1,650",
    change: "+1.80%",
    marketCap: "₹8,00,000 Cr",
    highLow: "1,750/1,600",
    roe: "18%",
    pe: "22",
    pbv: "4.2",
    fiveYSalesGrowth: "9%",
    fiveYProfitGrowth: "10%",
    clarification: {
      text: "know more",
      url: "http://localhost:3000/stockhandle"
    },
    sector: "Financial Services",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Infosys",
    ltp: "1,500",
    change: "+3.40%",
    marketCap: "₹6,00,000 Cr",
    highLow: "1,550/1,400",
    roe: "25%",
    pe: "24",
    pbv: "6.0",
    fiveYSalesGrowth: "12%",
    fiveYProfitGrowth: "15%",
    clarification: {
      text: "know more",
      url: "http://localhost:3000/stockhandle"
    },
    sector: "IT",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Larsen & Toubro",
    ltp: "2,000",
    change: "-0.50%",
    marketCap: "₹4,50,000 Cr",
    highLow: "2,100/1,950",
    roe: "20%",
    pe: "18",
    pbv: "4.5",
    fiveYSalesGrowth: "7%",
    fiveYProfitGrowth: "5%",
    clarification: {
      text: "know more",
      url: "http://localhost:3000/stockhandle"
    },
    sector: "Capital Goods",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Maruti Suzuki",
    ltp: "9,500",
    change: "+1.60%",
    marketCap: "₹6,00,000 Cr",
    highLow: "9,800/9,200",
    roe: "18%",
    pe: "27",
    pbv: "5.5",
    fiveYSalesGrowth: "11%",
    fiveYProfitGrowth: "13%",
    clarification: {
      text: "know more",
      url: "https://www.marutisuzuki.com"
    },
    sector: "Automobile",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "ICICI Bank",
    ltp: "850",
    change: "+0.50%",
    marketCap: "₹6,00,000 Cr",
    highLow: "880/830",
    roe: "20%",
    pe: "22",
    pbv: "3.8",
    fiveYSalesGrowth: "10%",
    fiveYProfitGrowth: "8%",
    clarification: {
      text: "know more",
      url: "https://www.icicibank.com"
    },
    sector: "Financial Services",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Hindustan Unilever",
    ltp: "2,700",
    change: "-0.10%",
    marketCap: "₹7,00,000 Cr",
    highLow: "2,750/2,600",
    roe: "35%",
    pe: "35",
    pbv: "9.0",
    fiveYSalesGrowth: "6%",
    fiveYProfitGrowth: "8%",
    clarification: {
      text: "know more",
      url: "https://www.hul.co.in"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Bharti Airtel",
    ltp: "550",
    change: "-2.10%",
    marketCap: "₹4,00,000 Cr",
    highLow: "600/530",
    roe: "10%",
    pe: "20",
    pbv: "2.5",
    fiveYSalesGrowth: "9%",
    fiveYProfitGrowth: "6%",
    clarification: {
      text: "know more",
      url: "https://www.bhartiairtel.in"
    },
    sector: "Telecommunication",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Wipro",
    ltp: "400",
    change: "+0.40%",
    marketCap: "₹2,50,000 Cr",
    highLow: "430/390",
    roe: "18%",
    pe: "22",
    pbv: "3.5",
    fiveYSalesGrowth: "8%",
    fiveYProfitGrowth: "7%",
    clarification: {
      text: "know more",
      url: "https://www.wipro.com"
    },
    sector: "IT",
    marketCapCategory: "Mid cap",
    index: "Nifty 50"
  },
  {
    company: "Asian Paints",
    ltp: "3,000",
    change: "+1.30%",
    marketCap: "₹10,00,000 Cr",
    highLow: "3,100/2,900",
    roe: "29%",
    pe: "40",
    pbv: "9.5",
    fiveYSalesGrowth: "11%",
    fiveYProfitGrowth: "14%",
    clarification: {
      text: "know more",
      url: "https://www.asianpaints.com"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Godrej Consumer Products",
    ltp: "1,000",
    change: "+2.00%",
    marketCap: "₹6,00,000 Cr",
    highLow: "1,050/950",
    roe: "18%",
    pe: "35",
    pbv: "8.0",
    fiveYSalesGrowth: "7%",
    fiveYProfitGrowth: "9%",
    clarification: {
      text: "know more",
      url: "https://www.godrejcp.com"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Mid cap",
    index: "Nifty 50"
  },
  {
    company: "Tata Consultancy Services",
    ltp: "3,500",
    change: "+2.50%",
    marketCap: "₹12,00,000 Cr",
    highLow: "3,600/3,200",
    roe: "28%",
    pe: "30",
    pbv: "8.5",
    fiveYSalesGrowth: "10%",
    fiveYProfitGrowth: "12%",
    clarification: {
      text: "know more",
      url: "https://www.tcs.com"
    },
    sector: "IT",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Reliance Industries",
    ltp: "2,400",
    change: "-1.20%",
    marketCap: "₹15,00,000 Cr",
    highLow: "2,600/2,300",
    roe: "22%",
    pe: "25",
    pbv: "7.0",
    fiveYSalesGrowth: "8%",
    fiveYProfitGrowth: "9%",
    clarification: {
      text: "know more",
      url: "https://www.relianceindustries.com"
    },
    sector: "Energy",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "HDFC Bank",
    ltp: "1,650",
    change: "+1.80%",
    marketCap: "₹8,00,000 Cr",
    highLow: "1,750/1,600",
    roe: "18%",
    pe: "22",
    pbv: "4.2",
    fiveYSalesGrowth: "9%",
    fiveYProfitGrowth: "10%",
    clarification: {
      text: "know more",
      url: "https://www.hdfcbank.com"
    },
    sector: "Financial Services",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Infosys",
    ltp: "1,500",
    change: "+3.40%",
    marketCap: "₹6,00,000 Cr",
    highLow: "1,550/1,400",
    roe: "25%",
    pe: "24",
    pbv: "6.0",
    fiveYSalesGrowth: "12%",
    fiveYProfitGrowth: "15%",
    clarification: {
      text: "know more",
      url: "https://www.infosys.com"
    },
    sector: "IT",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Larsen & Toubro",
    ltp: "2,000",
    change: "-0.50%",
    marketCap: "₹4,50,000 Cr",
    highLow: "2,100/1,950",
    roe: "20%",
    pe: "18",
    pbv: "4.5",
    fiveYSalesGrowth: "7%",
    fiveYProfitGrowth: "5%",
    clarification: {
      text: "know more",
      url: "https://www.larsentoubro.com"
    },
    sector: "Capital Goods",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Maruti Suzuki",
    ltp: "9,500",
    change: "+1.60%",
    marketCap: "₹6,00,000 Cr",
    highLow: "9,800/9,200",
    roe: "18%",
    pe: "27",
    pbv: "5.5",
    fiveYSalesGrowth: "11%",
    fiveYProfitGrowth: "13%",
    clarification: {
      text: "know more",
      url: "https://www.marutisuzuki.com"
    },
    sector: "Automobile",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "ICICI Bank",
    ltp: "850",
    change: "+0.50%",
    marketCap: "₹6,00,000 Cr",
    highLow: "880/830",
    roe: "20%",
    pe: "22",
    pbv: "3.8",
    fiveYSalesGrowth: "10%",
    fiveYProfitGrowth: "8%",
    clarification: {
      text: "know more",
      url: "https://www.icicibank.com"
    },
    sector: "Financial Services",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Hindustan Unilever",
    ltp: "2,700",
    change: "-0.10%",
    marketCap: "₹7,00,000 Cr",
    highLow: "2,750/2,600",
    roe: "35%",
    pe: "35",
    pbv: "9.0",
    fiveYSalesGrowth: "6%",
    fiveYProfitGrowth: "8%",
    clarification: {
      text: "know more",
      url: "https://www.hul.co.in"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Bharti Airtel",
    ltp: "550",
    change: "-2.10%",
    marketCap: "₹4,00,000 Cr",
    highLow: "600/530",
    roe: "10%",
    pe: "20",
    pbv: "2.5",
    fiveYSalesGrowth: "9%",
    fiveYProfitGrowth: "6%",
    clarification: {
      text: "know more",
      url: "https://www.bhartiairtel.in"
    },
    sector: "Telecommunication",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Wipro",
    ltp: "400",
    change: "+0.40%",
    marketCap: "₹2,50,000 Cr",
    highLow: "430/390",
    roe: "18%",
    pe: "22",
    pbv: "3.5",
    fiveYSalesGrowth: "8%",
    fiveYProfitGrowth: "7%",
    clarification: {
      text: "know more",
      url: "https://www.wipro.com"
    },
    sector: "IT",
    marketCapCategory: "Mid cap",
    index: "Nifty Next 50"
  },
  {
    company: "Asian Paints",
    ltp: "3,000",
    change: "+1.30%",
    marketCap: "₹10,00,000 Cr",
    highLow: "3,100/2,900",
    roe: "29%",
    pe: "40",
    pbv: "9.5",
    fiveYSalesGrowth: "11%",
    fiveYProfitGrowth: "14%",
    clarification: {
      text: "know more",
      url: "https://www.asianpaints.com"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Godrej Consumer Products",
    ltp: "1,000",
    change: "+2.00%",
    marketCap: "₹6,00,000 Cr",
    highLow: "1,050/950",
    roe: "18%",
    pe: "35",
    pbv: "8.0",
    fiveYSalesGrowth: "7%",
    fiveYProfitGrowth: "9%",
    clarification: {
      text: "know more",
      url: "https://www.godrejcp.com"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Mid cap",
    index: "Nifty Next 50"
  },
  {
    company: "Titan Company",
    ltp: "2,700",
    change: "+2.10%",
    marketCap: "₹5,00,000 Cr",
    highLow: "2,800/2,600",
    roe: "23%",
    pe: "45",
    pbv: "10.0",
    fiveYSalesGrowth: "13%",
    fiveYProfitGrowth: "17%",
    clarification: {
      text: "know more",
      url: "https://www.titan.co.in"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Adani Green Energy",
    ltp: "1,800",
    change: "+3.50%",
    marketCap: "₹4,00,000 Cr",
    highLow: "1,850/1,750",
    roe: "14%",
    pe: "65",
    pbv: "12.0",
    fiveYSalesGrowth: "22%",
    fiveYProfitGrowth: "18%",
    clarification: {
      text: "know more",
      url: "https://www.adanigreenenergy.com"
    },
    sector: "Renewable Energy",
    marketCapCategory: "Mid cap",
    index: "Nifty Next 50"
  },
  {
    company: "Zomato",
    ltp: "120",
    change: "+5.00%",
    marketCap: "₹1,00,000 Cr",
    highLow: "125/100",
    roe: "-5%",
    pe: "N/A",
    pbv: "3.2",
    fiveYSalesGrowth: "100%",
    fiveYProfitGrowth: "N/A",
    clarification: {
      text: "know more",
      url: "https://www.zomato.com"
    },
    sector: "Consumer Services",
    marketCapCategory: "Small cap",
    index: "Nifty 50"
  },
  {
    company: "Avenue Supermarts",
    ltp: "3,000",
    change: "-1.40%",
    marketCap: "₹3,50,000 Cr",
    highLow: "3,200/2,800",
    roe: "18%",
    pe: "58",
    pbv: "11.5",
    fiveYSalesGrowth: "15%",
    fiveYProfitGrowth: "12%",
    clarification: {
      text: "know more",
      url: "https://www.dmart.in"
    },
    sector: "Retail",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Biocon",
    ltp: "500",
    change: "-0.80%",
    marketCap: "₹3,00,000 Cr",
    highLow: "520/480",
    roe: "14%",
    pe: "35",
    pbv: "6.5",
    fiveYSalesGrowth: "10%",
    fiveYProfitGrowth: "12%",
    clarification: {
      text: "know more",
      url: "https://www.biocon.com"
    },
    sector: "Pharmaceuticals",
    marketCapCategory: "Mid cap",
    index: "Nifty Next 50"
  },
  {
    company: "Tata Consultancy Services",
    ltp: "3,500",
    change: "+2.50%",
    marketCap: "₹12,00,000 Cr",
    highLow: "3,600/3,200",
    roe: "28%",
    pe: "30",
    pbv: "8.5",
    fiveYSalesGrowth: "10%",
    fiveYProfitGrowth: "12%",
    clarification: {
      text: "know more",
      url: "https://www.tcs.com"
    },
    sector: "IT",
    marketCapCategory: "Large cap",
    index: "Nifty 50"
  },
  {
    company: "Reliance Industries",
    ltp: "2,400",
    change: "-1.20%",
    marketCap: "₹15,00,000 Cr",
    highLow: "2,600/2,300",
    roe: "22%",
    pe: "25",
    pbv: "7.0",
    fiveYSalesGrowth: "8%",
    fiveYProfitGrowth: "9%",
    clarification: {
      text: "know more",
      url: "https://www.relianceindustries.com"
    },
    sector: "Energy",
    marketCapCategory: "Large cap",
    index: "Nifty 500"
  },
  {
    company: "HDFC Bank",
    ltp: "1,650",
    change: "+1.80%",
    marketCap: "₹8,00,000 Cr",
    highLow: "1,750/1,600",
    roe: "18%",
    pe: "22",
    pbv: "4.2",
    fiveYSalesGrowth: "9%",
    fiveYProfitGrowth: "10%",
    clarification: {
      text: "know more",
      url: "https://www.hdfcbank.com"
    },
    sector: "Financial Services",
    marketCapCategory: "Large cap",
    index: "Nifty Midcap 100"
  },
  {
    company: "Infosys",
    ltp: "1,500",
    change: "+3.40%",
    marketCap: "₹6,00,000 Cr",
    highLow: "1,550/1,400",
    roe: "25%",
    pe: "24",
    pbv: "6.0",
    fiveYSalesGrowth: "12%",
    fiveYProfitGrowth: "15%",
    clarification: {
      text: "know more",
      url: "https://www.infosys.com"
    },
    sector: "IT",
    marketCapCategory: "Large cap",
    index: "Nifty Smallcap 100"
  },
  {
    company: "Larsen & Toubro",
    ltp: "2,000",
    change: "-0.50%",
    marketCap: "₹4,50,000 Cr",
    highLow: "2,100/1,950",
    roe: "20%",
    pe: "18",
    pbv: "4.5",
    fiveYSalesGrowth: "7%",
    fiveYProfitGrowth: "5%",
    clarification: {
      text: "know more",
      url: "https://www.larsentoubro.com"
    },
    sector: "Capital Goods",
    marketCapCategory: "Large cap",
    index: "Nifty Alpha 50"
  },
  {
    company: "Maruti Suzuki",
    ltp: "9,500",
    change: "+1.60%",
    marketCap: "₹6,00,000 Cr",
    highLow: "9,800/9,200",
    roe: "18%",
    pe: "27",
    pbv: "5.5",
    fiveYSalesGrowth: "11%",
    fiveYProfitGrowth: "13%",
    clarification: {
      text: "know more",
      url: "https://www.marutisuzuki.com"
    },
    sector: "Automobile",
    marketCapCategory: "Large cap",
    index: "Nifty Bank"
  },
  {
    company: "ICICI Bank",
    ltp: "850",
    change: "+0.50%",
    marketCap: "₹6,00,000 Cr",
    highLow: "880/830",
    roe: "20%",
    pe: "22",
    pbv: "3.8",
    fiveYSalesGrowth: "10%",
    fiveYProfitGrowth: "8%",
    clarification: {
      text: "know more",
      url: "https://www.icicibank.com"
    },
    sector: "Financial Services",
    marketCapCategory: "Large cap",
    index: "Nifty 100"
  },
  {
    company: "Hindustan Unilever",
    ltp: "2,700",
    change: "-0.10%",
    marketCap: "₹7,00,000 Cr",
    highLow: "2,750/2,600",
    roe: "35%",
    pe: "35",
    pbv: "9.0",
    fiveYSalesGrowth: "6%",
    fiveYProfitGrowth: "8%",
    clarification: {
      text: "know more",
      url: "https://www.hul.co.in"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty Next 50"
  },
  {
    company: "Bharti Airtel",
    ltp: "550",
    change: "-2.10%",
    marketCap: "₹4,00,000 Cr",
    highLow: "600/530",
    roe: "10%",
    pe: "20",
    pbv: "2.5",
    fiveYSalesGrowth: "9%",
    fiveYProfitGrowth: "6%",
    clarification: {
      text: "know more",
      url: "https://www.bhartiairtel.in"
    },
    sector: "Telecommunication",
    marketCapCategory: "Large cap",
    index: "Nifty Midcap 150"
  },
  {
    company: "Wipro",
    ltp: "400",
    change: "+0.40%",
    marketCap: "₹2,50,000 Cr",
    highLow: "430/390",
    roe: "18%",
    pe: "22",
    pbv: "3.5",
    fiveYSalesGrowth: "8%",
    fiveYProfitGrowth: "7%",
    clarification: {
      text: "know more",
      url: "https://www.wipro.com"
    },
    sector: "IT",
    marketCapCategory: "Mid cap",
    index: "Nifty Smallcap 250"
  },
  {
    company: "Asian Paints",
    ltp: "3,000",
    change: "+1.30%",
    marketCap: "₹10,00,000 Cr",
    highLow: "3,100/2,900",
    roe: "29%",
    pe: "40",
    pbv: "9.5",
    fiveYSalesGrowth: "11%",
    fiveYProfitGrowth: "14%",
    clarification: {
      text: "know more",
      url: "https://www.asianpaints.com"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty50 Value 20"
  },
  {
    company: "Godrej Consumer Products",
    ltp: "1,000",
    change: "+2.00%",
    marketCap: "₹6,00,000 Cr",
    highLow: "1,050/950",
    roe: "18%",
    pe: "35",
    pbv: "8.0",
    fiveYSalesGrowth: "7%",
    fiveYProfitGrowth: "9%",
    clarification: {
      text: "know more",
      url: "https://www.godrejcp.com"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Mid cap",
    index: "Nifty Commodities"
  },
  {
    company: "Titan Company",
    ltp: "2,700",
    change: "+2.10%",
    marketCap: "₹5,00,000 Cr",
    highLow: "2,800/2,600",
    roe: "23%",
    pe: "45",
    pbv: "10.0",
    fiveYSalesGrowth: "13%",
    fiveYProfitGrowth: "17%",
    clarification: {
      text: "know more",
      url: "https://www.titan.co.in"
    },
    sector: "Consumer Durables",
    marketCapCategory: "Large cap",
    index: "Nifty 200"
  },
  {
    company: "Adani Green Energy",
    ltp: "1,800",
    change: "+3.50%",
    marketCap: "₹4,00,000 Cr",
    highLow: "1,850/1,750",
    roe: "14%",
    pe: "65",
    pbv: "12.0",
    fiveYSalesGrowth: "22%",
    fiveYProfitGrowth: "18%",
    clarification: {
      text: "know more",
      url: "https://www.adanigreenenergy.com"
    },
    sector: "Renewable Energy",
    marketCapCategory: "Mid cap",
    index: "Nifty LargeMidcap 250"
  },
  
];

export default stocks;