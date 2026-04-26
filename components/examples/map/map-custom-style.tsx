import type { StyleSpecification } from "maplibre-gl"

import { Map } from "@/components/ui/map"

// Custom light style with soft teal/mint theme using OpenFreeMap tiles
// OpenFreeMap: MIT License - https://github.com/hyperknot/openfreemap/blob/main/LICENSE.md
const customLightStyle: StyleSpecification = {
  version: 8,
  name: "Custom Light Style",
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://tiles.openfreemap.org/planet",
      attribution:
        '&copy; <a href="https://openfreemap.org">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
  glyphs: "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "#f5f9f8" },
    },
    {
      id: "water",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "water",
      paint: { "fill-color": "#c5e3df" },
    },
    {
      id: "landcover",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "landcover",
      paint: { "fill-color": "#e8f5e9", "fill-opacity": 0.5 },
    },
    {
      id: "roads-minor",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["in", "class", "minor", "service", "street"],
      paint: {
        "line-color": "#90a4ae",
        "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.5, 18, 4],
      },
    },
    {
      id: "roads-major",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["in", "class", "primary", "secondary", "tertiary", "trunk"],
      paint: {
        "line-color": "#4db6ac",
        "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1, 18, 8],
      },
    },
    {
      id: "roads-highway",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["==", "class", "motorway"],
      paint: {
        "line-color": "#26a69a",
        "line-width": ["interpolate", ["linear"], ["zoom"], 6, 1, 18, 12],
      },
    },
    {
      id: "buildings",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "building",
      paint: { "fill-color": "#cfd8dc", "fill-opacity": 0.6 },
    },
  ],
}

// Custom dark style with soft teal/slate theme
const customDarkStyle: StyleSpecification = {
  version: 8,
  name: "Custom Dark Style",
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://tiles.openfreemap.org/planet",
      attribution:
        '&copy; <a href="https://openfreemap.org">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
  glyphs: "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "#1e272e" },
    },
    {
      id: "water",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "water",
      paint: { "fill-color": "#2c3e50" },
    },
    {
      id: "landcover",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "landcover",
      paint: { "fill-color": "#2d3e36", "fill-opacity": 0.5 },
    },
    {
      id: "roads-minor",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["in", "class", "minor", "service", "street"],
      paint: {
        "line-color": "#455a64",
        "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.5, 18, 4],
      },
    },
    {
      id: "roads-major",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["in", "class", "primary", "secondary", "tertiary", "trunk"],
      paint: {
        "line-color": "#4db6ac",
        "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1, 18, 8],
      },
    },
    {
      id: "roads-highway",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: ["==", "class", "motorway"],
      paint: {
        "line-color": "#80cbc4",
        "line-width": ["interpolate", ["linear"], ["zoom"], 6, 1, 18, 12],
      },
    },
    {
      id: "buildings",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "building",
      paint: { "fill-color": "#37474f", "fill-opacity": 0.7 },
    },
  ],
}

export default function MapCustomStyle() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <Map
        center={[-122.4194, 37.7749]}
        zoom={12}
        styles={{
          light: customLightStyle,
          dark: customDarkStyle,
        }}
      />
    </div>
  )
}
