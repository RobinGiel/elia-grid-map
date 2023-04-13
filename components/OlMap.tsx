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
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

type Props = {
  place: [number, number];
};

export default function OlMap({ place }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const { map, setMap, removeMap } = useOlMap();

  useGeographic();

  const svg =
    '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor">' +
    '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />' +
    '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />' +
    "</svg>";

  useEffect(() => {
    const point = new Point(place);

    const iconFeature = new Feature({
      geometry: point,
      name: "Brussels",
    });

    const iconStyle = new Style({
      image: new Icon({
        opacity: 1,
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        anchor: [0.5, 35],
        src: "./marker.svg",
        scale: 2,
      }),
    });

    iconFeature.setStyle(iconStyle);
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
              features: [new Feature(point), iconFeature],
            }),
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
  }, [place, mapRef, map, setMap, removeMap, svg]);

  return <div ref={mapRef} className="w-full h-[calc(92vh-75px)]"></div>;
}
