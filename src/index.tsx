import ReactDOM from 'react-dom';
import App, { AppState, getTaskIndex } from './App';

import 'bootstrap/dist/css/bootstrap.css'; // bootstrap (https://getbootstrap.com/) has layout controls
import '@fortawesome/fontawesome-free/css/all.css'; // fontAwesome (https://fontawesome.com/) has icons
import './index.scss';
import { useEffect, useState } from 'react';
import { millisecondsToHumanString } from './Timer';
import { Helmet } from 'react-helmet';
import React from 'react';


const DEFAULT_TITLE = 'SI 579 PS 7';     // The window title when idle
const LOCAL_STORAGE_KEY = 'lemon_timer'; // The key in localStorage that we save everything to.


const DEFAULT_APP_STATE: AppState = { // When we start with no current application state, these are our defaults
    tasks: [], activeTaskID: false, workingUntil: false, onBreakUntil: false,
    workInterval: 25, breakInterval: 5
};


// Save the current state to localStorage
function saveState(state: AppState) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

// Load the state from localStorage (or return false if we couldn't find it)
function loadState(): AppState|false {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(data) {
            return JSON.parse(data);
        } else {
            return false;
        }
    } catch {
        return false; // probably an error parsing the JSON
    }
}

const MApp = React.memo(App);

function Root() {
    const [state, setAppState] = useState<AppState>(loadState() || DEFAULT_APP_STATE)
    const [title, setTitle] = useState<string>(DEFAULT_TITLE);

    useEffect(() => { // Update the window title to reflect the current task
        const updateInterval = setInterval(() => {
            if(state.workingUntil !== false && state.activeTaskID !== false) { // The user is in a work session
                const remaining = state.workingUntil - Date.now();
                const humanReadableRemaining = millisecondsToHumanString(remaining);

                const taskIndex = getTaskIndex(state.tasks, state.activeTaskID);
                const taskDescription = taskIndex === false ? 'focus' : state.tasks[taskIndex].description;
                setTitle(`${humanReadableRemaining} - ${taskDescription}`);
            } else if(state.onBreakUntil !== false) { // The user is on break
                const remaining = state.onBreakUntil - Date.now();
                setTitle(`${millisecondsToHumanString(remaining)} - Break`);
            } else {
                if(title !== DEFAULT_TITLE) {
                    setTitle(DEFAULT_TITLE);
                }
            }
        }, 1000);

        return () => clearInterval(updateInterval); // Cleanup function
    }, [state]);

    const onStateChange = React.useCallback((newState: AppState) => {
        setAppState(newState);
        saveState(newState);
    }, []);

    return <>
        <Helmet><title>{title}</title></Helmet>
        <MApp onStateChange={onStateChange} state={state} />
    </>
}

ReactDOM.render(<Root />, document.getElementById('root'));
