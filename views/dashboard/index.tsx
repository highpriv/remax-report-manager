import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardView: React.FC = () => {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://www.tcmb.gov.tr/kurlar/today.xml";

    const fetchCurrencyData = async () => {
      try {
        await axios
          .get(apiUrl, {
            headers: {
              "Content-Type": "application/xml; charset=utf-8",
            },
          })
          .then((response) => {
            console.log(response.data);
            setCurrencyData(response.data);
          });
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, []);

  return (
    <div>
      {currencyData ? (
        <div>
          <h2>Currency Rates</h2>
          <pre>{JSON.stringify(currencyData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading currency data...</p>
      )}
    </div>
  );
};

export default DashboardView;
