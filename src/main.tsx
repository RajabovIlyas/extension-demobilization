import ReactDOM from 'react-dom/client'
import './index.css'
import ExpirationDateProvider from "./providers/ExpirationDateProvider.tsx";
import Router from "./components/Router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ExpirationDateProvider>
        <Router/>
    </ExpirationDateProvider>
)
