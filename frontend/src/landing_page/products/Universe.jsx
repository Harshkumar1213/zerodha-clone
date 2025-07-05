import UniverseSub from "./UniverseSub";

export default function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div class="container text-center">
        <div class="row row-cols-3">
          <UniverseSub img={"img/zerodhaFundhouse.png"} univDes={'Our asset management venture that is creating simple and transparent index funds to help you save for your goals.'}/>
          <UniverseSub img={"img/sencibull.png"} univDes={'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII,and more.'}/>
          <UniverseSub img={"img/tijori.svg"} univDes={'Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.'}/>
          <UniverseSub img={"img/streakLogo.png"} univDes={' Systematic trading platform that allows you to create and backtest strategies without coding'}/>
          <UniverseSub img={"img/smallcaseLogo.png"} univDes={'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.'}/>
          <UniverseSub img={"img/dittoLogo.png"} univDes={'Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free'}/>
          
        </div>
      </div>
    </div>
  );
}
