import './App.css'
import ArticleList from "./components/ArticleList";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route
                path="/"
                element={<ArticleList />}
            />
        </Routes>
    </div>
  );
}

export default App;
