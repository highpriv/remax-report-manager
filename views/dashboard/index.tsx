// pages/index.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl, currentDate } from '../../constants/Dashboard';

const CurrencyConverter: React.FC = () => {
  const [currencyTypes, setFromCurrency] = useState<String[]>(['USD', 'EUR', 'TRY']);
  const [currencyDatas, setCurrencyDatas] = useState<Object>({
    USDTRY: 0,
    EURTRY: 0,
    EURUSD: 0,
  });

  const handleConvert = async () => {
    try {
      currencyTypes.forEach(async (currency) => {
        const response = await axios.get(`${apiUrl}/latest/${currency}`);
        const currencyData = response.data.conversion_rates;
        
        setCurrencyDatas((prev) => ({
          ...prev,
          [`${currency}TRY`]: currencyData.TRY,
          [`${currency}EUR`]: currencyData.EUR,
          [`${currency}USD`]: currencyData.USD,
        }));

      });
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };

  useEffect(() => {
    handleConvert();
  }, []);

  return (
    <div>
      <h1 className="text-2xl p-4 mb-4">BM Günlük Rapor</h1>

      <span>{currentDate}</span>
      
      <h3>USD/TRY: {
        
        currencyDatas.USDTRY

        }</h3>

      <h3>EUR/TRY: {
          
          currencyDatas.EURTRY
  
          }</h3>

      <h3>EUR/USD: {
            
            currencyDatas.EURUSD
    
            }</h3>

    </div>
  );
};

export default CurrencyConverter;
