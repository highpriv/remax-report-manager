
const getEthereumPrice = async () => {
    try {
        const response = await axios.get(`${apiUrl}/latest/ETH`);
        const currencyData = response.data.conversion_rates;
        setState({
        ethereumPrice: currencyData.TRY,
        });
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
    }
