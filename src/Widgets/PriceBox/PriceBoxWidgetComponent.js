import * as React from "react";
import * as Scrivito from "scrivito";
import CheckMark from "../../assets/images/check.png"

Scrivito.provideComponent("PriceBoxWidget", ({ widget }) => {
  const westLatestPrice = 52.9;
  const westTotalPrice = 240.71;
  const eastLatestPrice = 52.9;
  const eastTotalPrice = 240.71;
  const barrySubscription = 29;

  return (
    <div className="price-box">
      <div className="main-box">
        <div className="fs-11 fw-600 lh-13-px">SPOT PRIS</div>
        <div className="fs-24 ff-rubik-light lh-28-px midnight-text m-t-20">
          Strøm til indkøspris
        </div>
        <div className="m-t-40 divider-h m-b-40" />
        <div className="fs-15 fw-600 lh-18-px">
          Pris i øre/kWh
          <br />
          øst og vest for Storebælt
        </div>
        <div className="d-flex p-x-20 p-y-30 align-items-center">
          <div>
            <div className="fs-15 fw-600 lh-18-px">Vest</div>
            <div className="fs-15 ff-rubik-light lh-18-px m-t-20">
              Seneste kendte pris pr. kWh
            </div>
            <div className="fs-15 lh-18-px primary-text m-t-10">
              {westLatestPrice}
            </div>
            <div className="fs-15 ff-rubik-light lh-18-px m-t-20">
              Samlet elpris inkl. transport og afgifter - uden abonnement
            </div>
            <div className="fs-15 lh-18-px primary-text m-t-10">
              {westTotalPrice}
            </div>
            <div className="fs-12 ff-rubik-light lh-18-px m-t-10">
              Samlet elpris inkl. transport og afgifter - uden abonnement
            </div>
          </div>
          <div className="divider-v" />
          <div>
            <div className="fs-15 fw-600 lh-18-px">Vest</div>
            <div className="fs-15 ff-rubik-light lh-18-px m-t-20">
              Seneste kendte pris pr. kWh
            </div>
            <div className="fs-15 lh-18-px primary-text m-t-10">
              {eastLatestPrice}
            </div>
            <div className="fs-15 ff-rubik-light lh-18-px m-t-20">
              Samlet elpris inkl. transport og afgifter - uden abonnement
            </div>
            <div className="fs-15 lh-18-px primary-text m-t-10">
              {eastTotalPrice}
            </div>
            <div className="fs-12 ff-rubik-light lh-18-px m-t-10">
              Samlet elpris inkl. transport og afgifter - uden abonnement
            </div>
          </div>
        </div>
        <div className="fs-15 fw-600 lh-20-px m-b-15">Barry abonnement</div>
        <div className="fs-16 ff-rubik-light lh-20-px primary-text">
          <span className="fs-24 ff-rubik-light fw-300">
            {barrySubscription}
          </span>{" "}
          kr./md.
        </div>
      </div>
      <div className="second-box">
        <div className="d-flex align-items-center ff-rubik-light">
          <div className="check-box">
            <img src={CheckMark} />
          </div>
          Din pris er den samme som vores indkøbspris, og skifter time for time.
        </div>
        <div className="d-flex align-items-center ff-rubik-light">
          <div className="check-box">
            <img src={CheckMark} />
          </div>
          Ingen binding. Du kan slå op med Barry når du vil
        </div>
      </div>
    </div>
  );
});
