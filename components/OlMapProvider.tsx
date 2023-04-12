"use client";

import OLMap from "ol/Map";
import { createContext, useContext, useMemo, useState } from "react";

type ContextType = {
  map: OLMap | null;
  setMap: (map: OLMap) => void;
  removeMap: () => void;
};

const OLMapContextDefault: ContextType = {
  map: null,
  setMap: () => {},
  removeMap: () => {},
};

const OLMapContext = createContext<ContextType>(OLMapContextDefault);

export default function OLMapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [map, setMap] = useState<OLMap | null>(null);

  const value = useMemo(() => ({ map, setMap, removeMap: () => {} }), [map]);

  return (
    <OLMapContext.Provider value={value}>{children}</OLMapContext.Provider>
  );
}

export const useOlMap = () => {
  let context = useContext(OLMapContext);

  if (context === undefined) {
    throw new Error("useOlMap must be used within a MapProvider");
  }
  return context;
};
