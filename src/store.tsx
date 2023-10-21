import { createContext, useCallback, useContext, useState } from "react";

type StoreValuesContextType = {
  adminIds: string[];
};

type StoreActionsContextType = {
  toggleAdminId: (id: string) => void;
};

const StoreValuesContext = createContext<StoreValuesContextType>({
  adminIds: [],
});
const StoreActionsContext = createContext<StoreActionsContextType>({
  toggleAdminId: () => {},
});

export const useStore = (): [
  StoreValuesContextType,
  StoreActionsContextType
] => {
  const values = useContext(StoreValuesContext);
  const actions = useContext(StoreActionsContext);
  return [values, actions];
};

export const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [adminIds, setAdminIds] = useState<string[]>([]);

  const toggleAdminId = useCallback((id: string) => {
    if (adminIds.includes(id)) {
      setAdminIds(adminIds.filter((adminId) => adminId !== id));
    } else {
      setAdminIds([...adminIds, id]);
    }
  }, [adminIds]);

  return (
    <StoreActionsContext.Provider value={{ toggleAdminId }}>
      <StoreValuesContext.Provider value={{ adminIds }}>
        {children}
      </StoreValuesContext.Provider>
    </StoreActionsContext.Provider>
  );
};
