
import './App.css'
import Display from './Display';
import CountA from './CountA';
import CountB from './CountB';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    // 사용하지 않을 예정
    <Provider store={store}>
      <Display />
      <CountA />
      <CountB />
    </Provider>
  )
}

export default App
