import { useState } from 'react';
import BreedList from './components/BreedList';
import BreedDetails from './components/BreedDetails';
import DogFacts from './components/DogFacts';
import DogGroups from './components/DogGroups';

function App() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  return (
      <div style={{ padding: '2rem' }}>
        <h1>Dog Explorer App</h1>
        <BreedList onSelectBreed={setSelectedBreedId} />
        <BreedDetails breedId={selectedBreedId} />
        <hr />
        <DogFacts />
        <DogGroups />
      </div>
  );
}

export default App;
