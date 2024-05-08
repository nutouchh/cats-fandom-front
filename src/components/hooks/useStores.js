import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export const useStores = () => {
    const stores = useContext(MobXProviderContext);
    if (!stores) {
        throw new Error('useStores must be used within a MobXProvider');
    }
    return stores;
};