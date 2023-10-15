import { createContext, useCallback, useContext, useState } from "react";

type AdminStoreValuesContextType = {
  adminIds: string[];
};

type AdminStoreActionsContextType = {
  toggleAdminId: (id: string) => void;
};

const AdminStoreValuesContext = createContext<AdminStoreValuesContextType>({
  adminIds: [],
});
const AdminStoreActionsContext = createContext<AdminStoreActionsContextType>({
  toggleAdminId: () => {},
});

export const useAdminStore = (): [
  AdminStoreValuesContextType,
  AdminStoreActionsContextType
] => {
  const values = useContext(AdminStoreValuesContext);
  const actions = useContext(AdminStoreActionsContext);
  return [values, actions];
};

export const AdminStoreProvider = ({
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
    <AdminStoreActionsContext.Provider value={{ toggleAdminId }}>
      <AdminStoreValuesContext.Provider value={{ adminIds }}>
        {children}
      </AdminStoreValuesContext.Provider>
    </AdminStoreActionsContext.Provider>
  );
};
