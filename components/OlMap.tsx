"use client";

import "ol/ol.css";

import { Feature, Map, Overlay, View } from "ol/index";
import { OSM, Vector as VectorSource } from "ol/source";
import React, { useEffect, useRef } from "react";
import { useOlMap } from "./OlMapProvider";
import { Point } from "ol/geom";
import { useGeographic } from "ol/proj";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";

type Props = {
  zoom: number;
  place: [number, number];
};

export default function OlMap({ zoom, place }: Props) {
  useGeographic();
  const { map, setMap, removeMap } = useOlMap();
  const mapId = useRef<HTMLDivElement>(null);

  const point = new Point(place);

  useEffect(() => {
    if (!mapId.current) throw Error("mapId is not assigned");

    const theMap = new Map({
      view: new View({
        center: place,
        zoom: 8,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: {
            "circle-radius": 9,
            "circle-fill-color": "red",
          },
        }),
      ],
    });

    theMap.setTarget(mapId.current);
    setMap(theMap);

    return () => {
      if (!theMap) return;
      theMap.setTarget(undefined);
      removeMap();
    };
  }, [place, zoom]);

  return <div ref={mapId} className="w-full h-[800px]"></div>;
}
