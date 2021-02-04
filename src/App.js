import './app.css';
import { CaseOverview } from './components/case-overview';

function app() {
    return (
        <div className="App" id="app">
            <header className="App-header">
                <CaseOverview />
            </header>
        </div>
    );
}

export default app;
