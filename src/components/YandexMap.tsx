import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";
// import { Spin } from "antd";
import { useState } from "react";

function YandexMap() {
  // const navigator
  const [longlang, setLonglang] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const [loading, setLoading] = useState(false)
  if (loading) {
    <div>Loading...</div>
  }
  return (
    <div>
      <button
        onClick={() => {
          setLoading(true)
          navigator.geolocation.getCurrentPosition(
            (data) => {
              setLonglang({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude,
              });
              setLoading(false)
            },
            (e) => {
              console.error(e);
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
