import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('Afghanistan');
  const [url, setUrl] = useState(
    'https://restcountries.eu/rest/v2/all?query=Afghanistan',
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { //useEffectで直接async-awaitは使用不可
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(url);
      setData(result.data);
      setIsLoading(false);
    }
    fetchData();
  }, [url]);
    
  

  // const CountriesList = () => {
  //   const allCountries = () => {
  //     return (
  //       data.map((value, index) => (
  //         <div key={index}>
  //           {value.name}
  //         </div>
  //       ))
  //     )
  //   }
  //   if (!data.name > 10) {
  //     return allCountries();
  //   } else {
  //     return "マッチしすぎですわ"
  //   }
  // }

  return (
    <Fragment>
        <form onSubmit={event => {
            setUrl(`https://restcountries.eu/rest/v2/name/${query}`);
            event.preventDefault();
        }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
          <button type="submit">検索</button>
      </form>
        {isLoading ? (
          <div>ロード中...</div>
        ) : (
       <ul>
            {
              data.map((value, index) => {
                return (
                  <div key={index}>
                    <h1>
                      {value.name}
                    </h1>
                    <div>
                      <p>capital {value.capital}</p>
                      <p>population {value.population}</p>  
                    </div>
                    <h2>language</h2>
                    <div>
                      {value.languages.map((v, i) => {
                        return (<li key={i}>{v.name}</li>)
                      })}
                    </div>
                    <img src={value.flag} alt={value.flag} />
                  </div>
                )
              })
            }
        </ul>
        )}
    </Fragment>
  )
}


export default App



