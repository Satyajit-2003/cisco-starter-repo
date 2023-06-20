import './App.css';
import Banner from './Banner.js'
import Exhibit from './Exhibit.js'
import AddressDisplay from './AddressDisplay.js'
import PylonConnector from './PylonConnector';

function App() {
  
  return (
    <div className="App">
                <Banner bannerText="IP Adress finder" />
                <Exhibit name="Public IPv4 Address">
                    <AddressDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <AddressDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Latency">
                    <PylonConnector />
                </Exhibit>
            </div>
  );
}

export default App;
