import './App.css';

function App() {
  function handleClick() {
    console.log("I was clicked!")
  }

  function mouseHover () {
    console.log("I'm being hovered!")
  }

  return (
    <div className="container">
         <img onMouseEnter = {mouseHover} src="https://picsum.photos/640/360" alt = ""/>
          <button onClick = {handleClick}>Click me</button>
    </div>
  );
}

export default App;
