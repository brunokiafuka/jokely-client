import { useQuery } from "@apollo/client";
import React from "react";
import { HelperText } from "../components/Typography";
import { GET_CATEGORIES } from "../config/queries";

interface ICategories {
  categories: string[];
}

interface IStore {
  categories?: string[];
  loading?: boolean;
}

export const StoreContext = React.createContext<IStore>({});

export const useStoreContext = () => React.useContext(StoreContext);

export const StoreProvider = ({ children }: any) => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const [categories, setCategories] = React.useState<string[]>();

  React.useEffect(() => {
    const { categories } = (data || {}) as ICategories;
    setCategories(categories);
  }, [data]);

  return (
    <StoreContext.Provider value={{ categories, loading }}>
      <HelperText>powered by Chuck Norris 🐒</HelperText>
      {children}
    </StoreContext.Provider>
  );
};
