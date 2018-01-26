import 'Globals';
import ReactDOM from 'react-dom';
import 'Objs/index';
import 'Widgets/index';
import App from 'App';
import 'config/scrivito';
import 'config/scrivitoContentBrowser';

const application = document.getElementById('application');
if (application) {
  ReactDOM.render(<App />, application);
}
