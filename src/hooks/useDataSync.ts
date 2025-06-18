
import { useState, useEffect } from 'react';
import { getDataBySection, dataEventEmitter } from '@/services/adminDataService';

export const useDataSync = (sectionId: string) => {
  const [data, setData] = useState(() => getDataBySection(sectionId));
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleDataChange = (event: any) => {
      if (event.detail.sectionId === sectionId) {
        setData(getDataBySection(sectionId));
        setRefreshKey(prev => prev + 1);
      }
    };

    dataEventEmitter.addEventListener('dataChange', handleDataChange);
    
    // Also refresh data when component mounts
    setData(getDataBySection(sectionId));
    
    return () => dataEventEmitter.removeEventListener('dataChange', handleDataChange);
  }, [sectionId]);

  return { data, refreshKey };
};
