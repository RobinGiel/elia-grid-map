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
  }, [place, mapRef, map, setMap, removeMap]);

  return <div ref={mapRef} className="w-full h-[calc(92vh-75px)]"></div>;
}
