import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeviceAuth }  from './Components/login.js';
import { LiveInterfaces }  from './Components/liveInterface.js';
import { RecoilRoot, atom } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export const encytpKey = atom({
  key: 'key',
  default: 'jdh%):Aap(3>S#', 
});

export const client = atom({
  key: 'queryClient',
  default: queryClient, 
});


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/live_interfaces">
          <RecoilRoot>
              <QueryClientProvider client={queryClient}>
                <LiveInterfaces/>
              </QueryClientProvider>
            </RecoilRoot>
          </Route>

          <Route path="/">
          <RecoilRoot>
              <QueryClientProvider client={queryClient}>
                <DeviceAuth/>
              </QueryClientProvider>
            </RecoilRoot>
	        </Route>

	        <Route path="/logout">
            <RecoilRoot>
              <QueryClientProvider client={queryClient}>
                <DeviceAuth/>
              </QueryClientProvider>
            </RecoilRoot>
	        </Route>

        </Switch>
    </Router>
    </div>

  );
}

export default App;