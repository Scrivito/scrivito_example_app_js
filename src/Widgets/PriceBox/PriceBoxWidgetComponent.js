import * as React from "react";
import * as Scrivito from "scrivito";

class PriceBoxWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DK1: {},
      DK2: {},
    };

    this.updatePricing = this.updatePricing.bind(this);
  }

  componentDidMount() {
    // update the pricing in every 60 seconds
    this.updatePricing();
    this.timer = setInterval(this.updatePricing, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updatePricing() {
    fetch("https://www.nordpoolgroup.com/api/map/data/daily?currency=EUR")
      .then(response => {
        const { prices } = response.json();
        const DK1 = prices.find(price => price.Area === "DK1");
        const DK2 = prices.find(price => price.Area === "DK2");
        this.setState({ DK1, DK2 });
      })
      .then(data => this.setState({ data }));
  }

  render() {
    const { DK1, DK2 } = this.state;

    const westLatestPrice = DK1.Value || "";
    const westTotalPrice = 240.71;
    const eastLatestPrice = DK2.Value || "";
    const eastTotalPrice = 240.71;
    const barrySubscription = 29;

    return (
      <div className="price-box">
        <div className="main-box">
          <div className="fs-11 fw-600 lh-13-px">SPOTPRIS</div>
          <div className="fs-24 ff-rubik-light lh-28-px midnight-text m-t-20">
            Prisen på strøm lige nu
          </div>
          <div className="m-t-40 divider-h m-b-40" />
          <div className="d-flex p-x-20 align-items-center">
            <div>
              <div className="fs-15 fw-600 lh-18-px">Vestdanmark</div>
              <div className="fs-15 ff-rubik-light lh-18-px m-t-20">
                Pris i øre pr. kWh
              </div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {westLatestPrice}
              </div>
              <div className="fs-15 ff-rubik-light lh-20-px m-t-20">
                Samlet elpris pr. måned inkl. afgifter - uden abonnement
              </div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {westTotalPrice}
              </div>
              <div className="fs-12 ff-rubik-light lh-18-px m-t-10">
                For en gennemsnitlig husstand i Aarhus
              </div>
            </div>
            <div className="divider-v" />
            <div>
              <div className="fs-15 fw-600 lh-18-px">Østdanmark</div>
              <div className="fs-15 ff-rubik-light lh-18-px m-t-20">
                Pris i øre pr. kWh
              </div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {eastLatestPrice}
              </div>
              <div className="fs-15 ff-rubik-light lh-20-px m-t-20">
                Samlet elpris pr. måned inkl. afgifter - uden abonnement
              </div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {eastTotalPrice}
              </div>
              <div className="fs-12 ff-rubik-light lh-18-px m-t-10">
                For en gennemsnitlig husstand i Aarhus
              </div>
            </div>
          </div>
          <div className="fs-15 fw-600 lh-20-px m-t-30 m-b-15">
            Barry abonnement
          </div>
          <div className="fs-16 ff-rubik-light lh-20-px primary-text">
            <span className="fs-24 ff-rubik-light fw-300">
              {barrySubscription}
            </span>{" "}
            kr./md.
          </div>
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("PriceBoxWidget", PriceBoxWidget);
