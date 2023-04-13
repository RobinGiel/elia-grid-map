"use client";
import "ol/ol.css";
import React, { useEffect, useRef } from "react";
import { Feature, Map, View } from "ol/index";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { useGeographic } from "ol/proj";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";

type Props = {
  place: [number, number];
};

export default function OlMap({ place }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useGeographic();

  useEffect(() => {
    const point = new Point(place);
    if (ref.current && !mapRef.current) {
      mapRef.current = new Map({
        target: ref.current,
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
    }
  }, [place, ref, mapRef]);

  return <div ref={ref} className="w-full h-[800px]"></div>;
}
