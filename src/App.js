import Button from './Button';
import Text from './Text';

function App() {
  const onClick = () => {
    console.log("Button was clicked...");
  };

  return (
    <div className="App">
      <Button onClick={onClick}/>
      <Text onClick={onClick}/>
    </div>
  );
};

export default App;
