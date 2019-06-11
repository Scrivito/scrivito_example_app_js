import * as React from "react";
import * as Scrivito from "scrivito";

class FooterWidget extends React.Component {
  render() {
    return (
      <div className="footer-widget">
        <div className="left">
          <img src={"https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ac44668630875dc0/d710a3a5d20e/Grey-logo-.svg"} />
          <p><a className="orange-text" href="https://helpcenter.getbarry.co/hc/da/requests/new" target="_blank">Chat</a> eller <a  className="orange-text" href="mailto:hello@getbarry.co?Subject=Contact">mail</a> os alle<br/>dage fra 10:00 til 22:00</p>
        </div>
        <div className="right">
          <div className="site-links">
            <a href="/presse">Presse</a>
            <a href="/privatlivspolitik">Privatlivspolitik</a>
            <a href="/leveringsbetingelser-privat">Leveringsbetingelser</a>
            <a href="/Cookiepolitik">Cookie Politik</a>
            <a href="/app-vilkaar-og-betingelser">App vilkår</a>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/getbarry"><i className="fa fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/getbarry/?hl=en"><i className="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/28608159/admin/"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCXOqi4jMACgwvqli8GG8wyg"><i className="fa fa-youtube"></i></a>
          </div>
          <div className="co-block">
            <img width="90" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/48750219aa96c6f9/b553e7db84aa/v/9400ade541b7/logo_da_180_96-96-224.png" alt="" data-scrivito-is-clickable="true" />
          </div>
          <div className="store-block">
            <div className="store-item">
              <a  className="android-mob-link" href="https://play.google.com/store/apps/details?id=com.barrymobile&referrer=utm_source%3Dlp%26utm_medium%3Dbutton%26utm_campaign%3Dgp_playstore"><img height="40" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/b66b66a12fc3e404/6bf3a20d5079/googleplay.svg" alt=""/></a>
            </div>

            <div className="store-item">
              <a className="ios-mob-link" href="https://itunes.apple.com/dk/app/barry/id1447625857?mt=8?utm_source=lp&utm_medium=button&utm_campaign=ios_appstore"><img height="40" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/8b5068258bd84c5e/892887bc7e79/appstore.svg" alt="" data-scrivito-is-clickable="true"/></a>
            </div>
          </div>
        </div>
        <div className="left copy-block">
          <div>
            <p>
              ©Barry Danmark ApS 2018<br/>
              CVR 38998099
              <br/>
              <br/>
              Barry er finansieret af det finske energiselskab <a href="https://www3.fortum.com" className="orange-text" target="_blank" rel="noopener noreferrer">Fortum</a><br/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Scrivito.provideComponent("FooterWidget", FooterWidget);
