import { useEffect, useState } from "react";
import axios from "axios";
import { BreweryType, ErrorType } from "types";

const useBreweries = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    message: "",
    status: null,
  });

  useEffect(() => {
    const getBreweries = async () => {
      setIsPending(true);
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
        setIsPending(false);
      } catch (error: any) {
        setIsPending(false);
        setError({
          isError: true,
          message: error.message,
          status: error.response.status,
        });
      }
    };

    getBreweries();
  }, []);

  return [breweries, isPending, error] as const;
};

export default useBreweries;
