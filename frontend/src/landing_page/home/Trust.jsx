import "./HomePage.css";
export default function Trust() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <h2>Trust with confidence</h2>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="lh-base color">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="lh-base color">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a className="text-decoration-none" href="">
              Our philosophies.
            </a>
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="lh-base color">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="lh-base color">
            With initiatives like <a className="text-decoration-none" href="">Nudge</a> and
            <a className="text-decoration-none" href="">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-6 mt-5">
          <img style={{ width: "100%" }} src="img/ecosystem.png" alt="" />
          <p className="text-center color">
            <a className="text-decoration-none" href="">
              Explore our products<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a className="m-5 text-decoration-none" href="">
              Try Kite demo<i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="col text-center mt-5 mb-5">
        <img src="img/pressLogos.png" alt="img" />
      </div>
    </div>
  );
}
