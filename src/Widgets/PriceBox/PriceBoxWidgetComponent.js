import * as React from "react";
import * as Scrivito from "scrivito";

const NUMBER_TO_MONTH = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

class PriceBoxWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DK1: null,
      DK2: null,
    };

    this.updatePricing = this.updatePricing.bind(this);
  }

  componentDidMount() {
    // update the pricing in every 60 seconds
    this.updatePricing();
    // this.timer = setInterval(this.updatePricing, 60 * 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  async updatePricing() {
    try {
      // JSON RPC data : often returns bad values
      const response = await fetch("https://jsonrpc.getbarry.dk/json-rpc", {
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method:
            "co.getbarry.megatron.controller.PublicController.getLatestPrice",
          params: ["DK1"],
        }),
        // mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const { result } = await response.json();
      this.setState({ DK1: result });

      const response2 = await fetch("https://jsonrpc.getbarry.dk/json-rpc", {
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method:
            "co.getbarry.megatron.controller.PublicController.getLatestPrice",
          params: ["DK2"],
        }),
        // mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const { result: result2 } = await response2.json();
      this.setState({ DK2: result2 });

      // NordPool API responses
      // const res = await fetch(
      //   "https://cors-anywhere.herokuapp.com/" +
      //     "https://www.nordpoolgroup.com/api/map/data/daily?currency=EUR"
      // );
      // const { Prices } = await res.json();
      // const DK1 = Prices.find(price => price.Area.includes("DK1"));
      // const DK2 = Prices.find(price => price.Area.includes("DK2"));
      // console.log(DK1, DK2);
      // this.setState({ DK1, DK2 });
    } catch (err) { }
  }

  render() {
    const { DK1, DK2 } = this.state;

    let westLatestPrice;
    let westTime;
    let eastLatestPrice;
    let eastTime;
    let temp;
    let time;

    if (DK1) {
      westLatestPrice = (DK1.value * 125).toFixed(2).replace(".", ",");
      temp = new Date(DK1.created);
      time = `D. ${temp.getDay() + 1} ${
        NUMBER_TO_MONTH[temp.getMonth()]
        } KL. ${temp.getHours()}.${temp.getMinutes()}`;
      temp = new Date(DK1.end);
      time += ` - ${temp.getHours()}.${temp.getMinutes()}`;
    } else {
      westLatestPrice = "...";
      time = "...";
    }

    if (DK2) {
      eastLatestPrice = (DK2.value * 125).toFixed(2).replace(".", ",");
    } else {
      eastLatestPrice = "...";
    }

    const westTotalPrice = "231,26";
    const eastTotalPrice = "245,97";
    const barrySubscription = 29;

    return (
      <div className="price-box"  id="priser-2">
        <div className="main-box">
          <div className="fs-11 lh-13-px">
            <span className="fw-600">SPOTPRIS</span>
            {time}
          </div>
          <div className="fs-24 ff-rubik-light lh-28-px midnight-text m-t-20">
            Prisen på strøm
          </div>
          <div className="m-t-40 divider-h m-b-40" />
          <div className="d-flex flex-column flex-sm-row d-flex p-x-20 align-items-center">
            <div>
              <div className="fs-15 fw-600 lh-18-px">Vestdanmark</div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {westLatestPrice} øre/kWh
              </div>
            </div>
            <div className="divider-v" />
            <div>
              <div className="fs-15 fw-600 lh-18-px">Østdanmark</div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {eastLatestPrice} øre/kWh
              </div>
            </div>
          </div>
          <div className="fs-11 fw-300 lh-15-px m-t-30 m-b-15">
            *priser inkl. moms
          </div>
        </div>

        <div className="main-box m-t-25">
          <div className="fs-24 ff-rubik-light lh-28-px midnight-text m-t-20">
            Samlet gennemsnitlig elpris
          </div>
          <div className="m-t-40 divider-h m-b-40" />
          <div className="d-flex flex-column flex-sm-row d-flex align-items-center">
            <div>
              <div className="fs-15 lh-18-px">
                Gennemsnitlig husstand
                <br />i Aarhus
              </div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {westTotalPrice} øre/kWh*
              </div>
            </div>
            <div className="divider-v" />
            <div>
              <div className="fs-15 lh-18-px">
                Gennemsnitlig husstand
                <br />i Storkøbenhavn
              </div>
              <div className="fs-16 ff-rubik-light lh-18-px primary-text m-t-10">
                {eastTotalPrice} øre/kWh*
              </div>
            </div>
          </div>
          <div className="fs-11 fw-300 lh-15-px m-t-30 m-b-15">
            *baseret på de sidste 3 års gennemsnitlige spotpriser
            <br />
            inkl. moms, skatter, afgifter og abonnement
          </div>
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent("PriceBoxWidget", PriceBoxWidget);
