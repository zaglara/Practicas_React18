import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  //</React.StrictMode>
)
