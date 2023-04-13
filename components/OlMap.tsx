"use client";
import "ol/ol.css";
import React, { useEffect, useRef } from "react";
import { Feature, Map, View } from "ol/index";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import { useGeographic } from "ol/proj";
import { useOlMap } from "./OlMapProvider";

type Props = {
  place: [number, number];
};

export default function OlMap({ place }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { map, setMap, removeMap } = useOlMap();

  useGeographic();

  useEffect(() => {
    const point = new Point(place);
    if (mapRef.current && !map) {
      let theMap = new Map({
        target: mapRef.current,
        view: new View({
          center: place,
          zoom: 12,
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
      setMap(theMap);
    }
    return () => {
      if (map) {
        removeMap();
      }
    };
  }, [place, mapRef, map, setMap, removeMap]);

  return <div ref={mapRef} className="w-full h-[calc(92vh-75px)]"></div>;
}
