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
    // this.timer = setInterval(this.updatePricing, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  async updatePricing() {
    try {
      // JSON RPC data : often returns bad values
      // const response = await fetch("https://jsonrpc.getbarry.co/json-rpc", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     jsonrpc: "2.0",
      //     id: 1,
      //     method:
      //       "co.getbarry.megatron.controller.PublicController.getLatestPrice",
      //     params: ["DK2"],
      //   }),
      //   // mode: "no-cors",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      // });
      // const { result } = await response.json();
      // this.setState({ DK1: result.value.toFixed(2) });

      // NordPool API responses
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/" +
          "https://www.nordpoolgroup.com/api/map/data/daily?currency=EUR"
      );
      const { Prices } = await res.json();
      const DK1 = Prices.find(price => price.Area.includes("DK1"));
      const DK2 = Prices.find(price => price.Area.includes("DK2"));
      console.log(DK1, DK2);
      this.setState({ DK1, DK2 });
    } catch (err) {}
  }

  render() {
    const { DK1, DK2 } = this.state;

    const westLatestPrice = DK1.Value || "...";
    const westTotalPrice = 240.71;
    const eastLatestPrice = DK2.Value || "...";
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
