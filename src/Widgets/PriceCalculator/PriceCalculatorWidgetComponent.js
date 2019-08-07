import * as React from "react";
import * as Scrivito from "scrivito";
import Select from "react-select";
import { BarChart, Bar, XAxis, YAxis, LabelList, Cell } from "recharts";
import myData from "./price_db.json";

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

const showPriceTypes = [
  {
    value: 0,
    label: "Elpris ialt",
  },
  {
    value: 1,
    label: "Elpris",
  },
  {
    value: 2,
    label: "Abonnement",
  },
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
      suppliers: [],
      zip: "",
      showData: [],
      barryIndex: 0,
      selectedType: {
        value: 0,
        label: "Elpris ialt",
      },
    };
  }

  componentDidMount() {
    const tempSup = [];
    const tempOptions = [];

    myData.forEach(element => {
      if (tempSup.indexOf(element.supplier) < 0 && element.supplier !== 'Barry' && element.supplier !== 'NordPool') {
        tempSup.push(element.supplier);
        tempOptions.push({
          value: element.supplier,
          label: element.supplier,
        });
      }
    });
    this.setState({ suppliers: tempOptions });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handleChangeType(selectedType) {
    this.setState({ selectedType }, () => {
      this.showBox(2);
    });
  }

  handleSelect(val) {
    this.setState({ selectedBol: val });
  }

  showBox(val) {
    if (this.state.selectedOption && this.state.selectedBol > 0 && this.state.zip !== "") {
      let tempData = [];
      myData.forEach(element => {
        let region = "DK2";
        let kwh = 1800;

        if (parseInt(this.state.zip) >= 5000) {
          region = "DK1";
        }

        if (this.state.selectedBol === 2) {
          kwh = 4900;
        }

        if (this.state.selectedBol === 3) {
          kwh = 15000;
        }

        if ((element.supplier === 'Barry' || (element.supplier === 'NordPool' && this.state.selectedType.value === 1) || element.supplier === this.state.selectedOption.value) && element.region === region && element.kwh === kwh) {
          let key = "total_price";
          let unit = 'øre/kWh';
          if (this.state.selectedType.value === 1) {
            key = "price";
          }
          if (this.state.selectedType.value === 2) {
            key = "subscription";
            unit = 'kr/år';
          }
          const tempVal = parseFloat(element[key].replace ? element[key].replace(",", ".") : element[key]);
          tempData.push({
            supplier: element.supplier,
            name: element.prod_name,
            uv: tempVal,
            label: `${tempVal.toFixed(1).replace('.0', '').replace('.', ',')} ${unit}`,
          });
        }
      });
      tempData = this.sortData(tempData);
      let barryIndex = 0;
      for (let i = 0; i < tempData.length; i++) {
        if (tempData[i].supplier === "Barry") {
          barryIndex = i;
        }
      }
      this.setState({ showBox: val, showData: tempData, barryIndex });
      window.scrollTo(0, 0);
    } else {
      alert("getbary.co meddelse \nBesvar venligst alle 3 spørgsmål for at få et svar");
    }
  }

  sortData(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i].uv > arr[j].uv) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  
  async updatePricing() {
    try {
      // JSON RPC data : often returns bad values
    } catch (err) {}
  }

  render() {
    const { DK1, DK2 } = this.state;
    const { headerTitle, headerDesc } = this.props;

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

    return (
      <div className="price-calculator-box" id="priser-2">
        {this.state.showBox === 1 && (
          <div className="main-box box1">
            <h2>{headerTitle}</h2>
            <p>
              {headerDesc}
            </p>
            <p>
              <label>I hvilket postnummer bor du?</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={this.state.zip}
                  onChange={event => {
                    this.setState({ zip: event.target.value });
                  }}
                />
                {this.state.zip !== "" && (
                  <div className="check-mark">
                    <i className="fa fa-check" />
                  </div>
                )}
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
                <img
                  src={
                    this.state.selectedBol === 1
                      ? "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/34830b8a0f126a0d/336116475e34/v/9b43a6ff5845/home2_active.png"
                      : "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/84e262f5b29d96b3/a06646e36c87/v/70d3aa0b1cd1/home2.png"
                  }
                />
                <span>Lejlighed</span>
              </div>
              <div
                className={
                  this.state.selectedBol === 2 ? "cal-item active" : "cal-item"
                }
                onClick={() => this.handleSelect(2)}
              >
                <img
                  src={
                    this.state.selectedBol === 2
                      ? "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ccfb56733d294fc2/22db5461e286/v/6cdeaa1a91f8/home1_active.png"
                      : "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/e5e78da71094b28f/a026571edc68/v/77560f55538a/home1.png"
                  }
                />
                <span>Hus</span>
              </div>
              <div
                className={
                  this.state.selectedBol === 3 ? "cal-item active" : "cal-item"
                }
                onClick={() => this.handleSelect(3)}
              >
                <img
                  src={
                    this.state.selectedBol === 3
                      ? "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ccfb56733d294fc2/22db5461e286/v/6cdeaa1a91f8/home1_active.png"
                      : "https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/e5e78da71094b28f/a026571edc68/v/77560f55538a/home1.png"
                  }
                />
                <span>Hus med elvarme</span>
              </div>
            </div>
            <label>Hvor er du kunde idag?</label>
            <Select
              value={this.state.selectedOption}
              onChange={val => this.handleChange(val)}
              options={this.state.suppliers}
              placeholder="Vælg elselskab"
              className="price-sel"
            />
            <button onClick={() => this.showBox(2)}>Sammenlign ></button>
          </div>
        )}
        {this.state.showBox === 2 && (
          <div className="main-box box2">
            <h2>Så meget havde du betalt med Barry</h2>
            <div className="box2-content">
              <div className="box2-heading">
                <div>
                  <span>Barry vs. {this.state.selectedOption.value}</span>
                  <span>{this.state.selectedBol === 1 ? "1.800" : this.state.selectedBol === 2 ? "4.900" : "15.000"} kWh/år</span>
                </div>
                <div>
                  <Select
                    value={this.state.selectedType}
                    onChange={val => this.handleChangeType(val)}
                    options={showPriceTypes}
                    className="price-sel"
                  />
                </div>
              </div>
              <div>
                <BarChart width={670} height={350} data={this.state.showData}>
                  <XAxis dataKey="name" tick={() => {
                    return null;}}/>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} interval={0} tick={(tickProps) => {
                    const { x, y, payload, width } = tickProps;
                    const { value, offset } = payload;
                    const maxLength = width / (this.state.showData.length * 9);
                    const wordArr = value.split(' ');
                    const dataArr = [];
                    let pp = "";

                    for (let i = 0; i < wordArr.length; i++) {
                      if ((pp + wordArr[i]).length > maxLength && pp !== "") {
                        dataArr.push(pp);
                        pp = wordArr[i];
                      } else {
                        if (pp === "" && (pp + wordArr[i]).length > maxLength) {
                          dataArr.push(wordArr[i]);
                        } else {
                          if ((pp + wordArr[i]).length < maxLength) {
                            pp += " " + wordArr[i];
                          }
                        } 
                      }
                    }
                    if (pp !== "") {
                      dataArr.push(pp);
                    }

                    const textArr = dataArr.map(item => {
                      return <tspan x={x + offset} dy="1.1em">{item}</tspan>;
                    });

                    return <text x={x + offset} y={y - 4} textAnchor="middle" fill="#6C738A" angle={45}>
                      { textArr }
                    </text>;
                  }} height={50} scale="band" xAxisId="quarter" />
                    
      
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
                              y={y - radius - 50}
                              fill="#6C738A"
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan x={x + width / 2} dy="1.2em">{value.split(" ")[0]}</tspan>
                              <tspan x={x + width / 2} dy="1.2em">{value.split(" ")[1]}</tspan>
                            </text>
                          </g>
                        );
                      }}
                    />
                    {this.state.showData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === this.state.barryIndex ? "#2EDBAC" : "#4DE9BF99"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </div>
            </div>
            <button onClick={() => this.showBox(1)}>
              Download app’en og skift til Barry
            </button>
            <a onClick={() => this.showBox(1)}>&lt; Gå tilbage</a>
          </div>
        )}
      </div>
    );
  }
}

Scrivito.provideComponent("PriceCalculatorWidget", ({ widget }) => {
  return <PriceCalculatorWidget headerTitle={widget.get("headerTitle")}  headerDesc={widget.get("headerDesc")} />
});
