import PhotoCat from './photoCat.jpg';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source={PhotoCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;