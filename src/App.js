import './App.css';
import Card from './components/card';
import Header from './components/header';

function App() {

  const cardTexts = []

  for (let i = 0; i < 8 ; i++){
    cardTexts.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ut vestibulum eros nisi, eu sagittis nist feugiat quis")
  }

  return (
    
    <div className="App">
      <Header></Header>
      <div className='cards'>
       {cardTexts.map((text, index) => {
         return <Card key={index} text={text} limit={57}></Card>
       })}
        
      </div> 
    
    </div>
  );
}

export default App;
