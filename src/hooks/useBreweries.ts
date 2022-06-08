import { useEffect, useState } from "react";
import axios from "axios";
import { Brewery } from "types";

const useBreweries = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    const getBreweries = async () => {
      try {
        const response = await axios.get(
          "https://api.openbrewerydb.org/breweries?per_page=50&page=1"
        );

        const indexedData = response.data.map(
          (brewery: object, index: number) => ({
            ...brewery,
            index: index + 1,
          })
        );

        setBreweries(indexedData);
      } catch (error) {
        setBreweries([]);
        console.error(error);
      }
    };

    getBreweries();
  }, []);

  return [breweries];
};

export default useBreweries;
