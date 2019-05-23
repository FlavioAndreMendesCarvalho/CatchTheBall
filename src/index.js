import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './style/myStyle.css'
import * as serviceWorker from './serviceWorker';
import Loading from './components/Loading'

const App = React.lazy(() => import('./App'));

ReactDOM.render(<Suspense fallback={<Loading/>}><App /></Suspense>, document.getElementById('root'));

serviceWorker.unregister();
