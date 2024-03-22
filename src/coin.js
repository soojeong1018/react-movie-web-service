import {useEffect, useState} from "react";

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res) => res.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);


    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :
                <select>
                    {coins.map((coin) => {
                        return <option key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
                    })}
                </select>}


        </div>
    );
}