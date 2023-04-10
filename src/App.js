
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json'
function App() {
  // console.log(movies)
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          movies.map((element) => {
            return <Movie title={element.Title} img={element.Poster} year={element.Year} />
          })
        }

      </div>
    </div>
  );
}

export default App;
