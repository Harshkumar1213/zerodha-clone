export default function CreateTicket() {
  return (
    <div className="container p-5">
      <p className="fs-5" style={{ color: "#666666" }}>
        To create a ticket, select a relevant topic
      </p>
      <div className="row text-start mt-5">
        <div className="col">
          <h5 className="fs-5 ticket-head">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="#333" stroke-width="2"/>
  <line x1="12" y1="8" x2="12" y2="16" stroke="#333" stroke-width="2" stroke-linecap="round"/>
  <line x1="8" y1="12" x2="16" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/>
</svg>
            Account Opening
          </h5>
          <ul className="ticket-ul">
            <li className="text-decoration-none">Resident individual</li>
            <li>Minor</li>
            <li>Non Resident Indian (NRI)</li>
            <li>Company, Partnership, HUF and LLP</li>
            <li>Glossary</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="fs-5 ticket-head">Your Zerodha Account</h5>
          <ul className="ticket-ul">
            <li className="text-decoration-none">Your Profile</li>
            <li>Account modification</li>
            <li>Client Master Report (CMR) and Depository Participant (DP)</li>
            <li>Nomination</li>
            <li>Transfer and conversion of securities</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="fs-5 ticket-head"> Kite</h5>
          <ul className="ticket-ul">
            <li className="text-decoration-none">IPO</li>
            <li>Trading FAQs</li>
            <li>Margin Trading Facility (MTF) and Margins</li>
            <li>Charts and orders</li>
            <li>Alerts and Nudges</li>
            <li>General</li>
          </ul>
        </div>
      </div>
      <div className="row text-start mt-5">
        <div className="col">
          <h5 className="fs-5 ticket-head">Funds</h5>
          <ul className="ticket-ul">
            <li className="text-decoration-none">Resident individual</li>
            <li>Add money</li>
            <li>Withdraw money</li>
            <li>Add bank accounts</li>
            <li>eMandates</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="fs-5 ticket-head">Console</h5>
          <ul className="ticket-ul">
            <li>Portfolio</li>
            <li>Corporate actions</li>
            <li>Funds statement</li>
            <li>Reports</li>
            <li>Profile</li>
            <li>Segments</li>
          </ul>
        </div>
        <div className="col">
          <h5 className="fs-5 ticket-head">Coin</h5>
          <ul className="ticket-ul">
            <li>Mutual funds</li>
            <li>National Pension Scheme (NPS)</li>
            <li>Features on Coin</li>
            <li>Payments and Orders</li>
            <li>General</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
