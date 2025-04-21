import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";
import { Spin } from "antd";
import React, { useState } from "react";
import Login from "./Login";

function YandexMap() {
  // const navigator
  const [longlang, setLonglang] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const [loading, setLoading] = useState(false)
  if (loading) {
    <div><Spin/></div>
  }
  return (
    <div>
      <button
        onClick={() => {
          setLoading(true)
          navigator.geolocation.getCurrentPosition(
            (data) => {
              console.log(data);
              setLonglang({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude,
              });
              setLoading(false)
            },
            (e) => {
              console.log(e);
            }
          );
        }}
      >
        meni top {loading}
      </button>
      <YMaps>
        <Map
          className="w-full h-[400px] "
          state={{
            center: longlang ? [longlang.latitude,longlang.longitude]: [41.2995,69.2401],
            zoom: 12,
          }}
        >
          {longlang && (
            <Placemark geometry={[longlang?.latitude, longlang?.longitude]} />
          )}
        </Map>
      </YMaps>
    </div>
  )
}

export default YandexMap
