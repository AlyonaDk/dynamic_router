import { FC, useState } from "react";
import MyButton from "../myButton/MyButton";

const CityPage: FC = () => {
  const berlin = {
    name: "Berlin",
    title: "Capital of Germany",
    imgUrl:
      "https://content.r9cdn.net/rimg/dimg/94/77/3c308be3-lm-1035-172eedc4c70.jpg?width=1366&height=768&xhint=2600&yhint=3239&crop=true",
  };
  const paris = {
    name: "Paris",
    title: "Capital of France",
    imgUrl:
      "https://imageio.forbes.com/specials-images/imageserve/6468ea7be5b5bee9d12e9948/eiffel-tour-and-Paris-cityscape/0x0.jpg?format=jpg&height=1835&width=2767",
  };

  const [isBerlin, setIsBerlin] = useState(true);
  const [cityData, setCityData] = useState(berlin);

  const toggleCity = (): void => {
    setIsBerlin((isBerlin) => {
      if (!isBerlin) {
        setCityData(berlin);
      } else {
        setCityData(paris);
      }
      return !isBerlin;
    });
  };

  return (
    <div className="App">
      <h1>{cityData?.name}</h1>
      <p>{cityData?.title}</p>
      <div className="imgWrapper">
        <img className="berlinImg" src={cityData?.imgUrl} alt="" />
      </div>
      {/* функцию toggleCity заводим на onClick */}

      <MyButton
        onClick={toggleCity}
        text={isBerlin ? "switch to Paris" : "back to Berlin"}
      />
    </div>
  );
};

export default CityPage;
