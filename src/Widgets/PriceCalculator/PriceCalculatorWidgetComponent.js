import * as React from "react";
import * as Scrivito from "scrivito";
import Select from "react-select";
import { BarChart, Bar, XAxis, YAxis, LabelList, Cell } from "recharts";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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

class PriceCalculatorWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DK1: null,
      DK2: null,
      selectedOption: null,
      selectedBol: 0,
      showBox: 1,
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

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleSelect(val) {
    this.setState({ selectedBol: val });
  }

  showBox(val) {
    this.setState({ showBox: val });
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
            "co.getbarry.megatron.controller.PriceController.getLatestPrice",
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
            "co.getbarry.megatron.controller.PriceController.getLatestPrice",
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
    } catch (err) {}
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
      temp = new Date(DK1.start);
      time = `D. ${temp.getDate()} ${
        NUMBER_TO_MONTH[temp.getMonth()]
      } KL. ${temp.getHours()}.${
        temp.getMinutes() === 0 ? "00" : temp.getMinutes()
      }`;
      temp = new Date(DK1.end);
      time += ` - ${temp.getHours()}.${
        temp.getMinutes() === 0 ? "00" : temp.getMinutes()
      }`;
    } else {
      westLatestPrice = "...";
      time = "...";
    }

    if (DK2) {
      eastLatestPrice = (DK2.value * 125).toFixed(2).replace(".", ",");
    } else {
      eastLatestPrice = "...";
    }

    const data = [
      {
        name: "Nord Pool Spot",
        uv: 28.9,
        label: "28,9 øre/kWh",
      },
      {
        name: "Barry",
        uv: 47.3,
        label: "47,3 øre/kWh",
      },
      {
        name: "Blue Flex",
        uv: 62.1,
        label: "62,1 øre/kWh",
      },
      {
        name: "Blue Fri Lejlighed",
        uv: 111.5,
        label: "111,5 øre/kWh",
      },
      {
        name: "Blue Fri Hus",
        uv: 181.7,
        label: "181,7 øre/kWh",
      },
    ];

    return (
      <div className="price-calculator-box" id="priser-2">
        {this.state.showBox === 1 && (
          <div className="main-box box1">
            <h2>Find ud af hvad Barry koster hjemme hos dig</h2>
            <p>
              Vi har samlet oplysningerne og gjort det nemt at sammenligne din
              historiske elpris med den pris, du ville have betalt hos Barrys -
              udfyld blot formularen nederst på denne side, så får du
              resultatet.
            </p>
            <p>
              <label>I hvilket postnummer bor du?</label>
              <div className="input-wrapper">
                <input type="text" value="5000" />
                <div className="check-mark">✓</div>
              </div>
            </p>
            <label>Boligform</label>
            <div className="p-calculater-selector">
              <div
                className={
                  this.state.selectedBol === 1 ? "cal-item active" : "cal-item"
                }
                onClick={() => this.handleSelect(1)}
              >
                <img width="80" height="65" src={this.state.selectedBol === 1 ? "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ccfb56733d294fc2/22db5461e286/v/6cdeaa1a91f8/home1_active.png" : "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/e5e78da71094b28f/a026571edc68/v/77560f55538a/home1.png"} />
                <span>Lejlighed</span>
              </div>
              <div
                className={
                  this.state.selectedBol === 2 ? "cal-item active" : "cal-item"
                }
                onClick={() => this.handleSelect(2)}
              >
                <img width="50" height="78" src={this.state.selectedBol === 2 ? "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/34830b8a0f126a0d/336116475e34/v/9b43a6ff5845/home2_active.png" : "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/84e262f5b29d96b3/a06646e36c87/v/70d3aa0b1cd1/home2.png"} />
                <span>Hus</span>
              </div>
            </div>
            <label>I hvilket postnummer bor du?</label>
            <Select
              value={this.state.selectedOption}
              onChange={val => this.handleChange(val)}
              options={options}
              placeholder="Vælg elselskab"
              className="price-sel"
            />
            <button onClick={() => this.showBox(2)}>Sammenlign ></button>
          </div>
        )}
        {this.state.showBox === 2 && (
          <div className="main-box box2">
            <h2>Her er prisen i dit hjem</h2>
            <div className="box2-content">
              <div className="box2-heading">
                <div>
                  <span>Barry vs. Blue Energy</span>
                  <span>1.800 kWh/år</span>
                </div>
                <div>
                  Elpris i alt
                </div>
              </div>
              <div>
                <BarChart width={680} height={350} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv">
                    <LabelList
                      dataKey="label"
                      position="top"
                      content={props => {
                        const { x, y, width, value } = props;
                        const radius = 10;

                        return (
                          <g>
                            <text
                              x={x + width / 2}
                              y={y - radius}
                              fill="#6C738A"
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              {value.split(" ")[0]} {value.split(" ")[1]}
                            </text>
                          </g>
                        );
                      }}
                    />
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 1 ? "#2EDBAC" : "#4DE9BF99"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </div>
            </div>
            <button onClick={() => this.showBox(1)}>Download app’en og skift til Barry</button>
            <a onClick={() => this.showBox(1)}>&lt; Gå tilbage</a>
          </div>
        )}
      </div>
    );
  }
}

Scrivito.provideComponent("PriceCalculatorWidget", PriceCalculatorWidget);
