import Hero from "./Hero";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import Universe from "./Universe";

export default function Product() {
  return (
    <>
      <Hero />
      <LeftImg
        imgURL={"img/coin.png"}
        prodName={"Kite"}
        prodDesr={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"Try demo"}
        learnMore={"Learn more"}
        googlePlay={"img/googlePlayBadge.png"}
        appStore={"img/appstoreBadge.png"}
        arrow={<i class="fa-solid fa-arrow-right"></i>}
      />
      <RightImg
      imgURL={"img/console.png"}
        prodName={"Console"}
        prodDesr={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        tryDemo={"Try demo"}
        arrow={<i class="fa-solid fa-arrow-right"></i>}
       />
      <LeftImg imgURL={"img/coin.png"}
        prodName={"Coin"}
        prodDesr={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={"Try demo"}
        learnMore={"Coin"}
        googlePlay={"img/googlePlayBadge.png"}
        appStore={"img/appstoreBadge.png"}
        arrow={<i class="fa-solid fa-arrow-right"></i>} />

        <RightImg
      imgURL={"img/kiteconnect.png"}
        prodName={"Kite Connect API"}
        prodDesr={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        tryDemo={"Kite Connect"}
        arrow={<i class="fa-solid fa-arrow-right"></i>}
       />
       <LeftImg imgURL={"img/varsity.png"}
        prodName={"Varsity mobile"}
        prodDesr={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        tryDemo={"Try demo"}
        learnMore={"Coin"}
        googlePlay={"img/googlePlayBadge.png"}
        appStore={"img/appstoreBadge.png"}
        arrow={<i class="fa-solid fa-arrow-right"></i>} />
      <Universe />
    </>
  );
}
