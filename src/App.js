import logo from './logo.svg';
import './App.css';
import { CaseOverview } from './components/case-overview';
import { useEffect } from 'react';
import store from './store/store';
import CaseManager from './managers/case-manager';

function App() {
    useEffect(() => {
        // Starting cases
        CaseManager.addCase(7, [
            { name: 'John', agency: 'Hospital' },
            { name: 'Maria', agency: 'School' },
        ]);
    }, []);

    return (
        <div className="App" id="app">
            <header className="App-header">
                <CaseOverview />
            </header>
        </div>
    );
}

export default App;
