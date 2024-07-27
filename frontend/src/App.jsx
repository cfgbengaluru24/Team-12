import { UserProvider } from './contexts';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
  });
  return (
    <UserProvider value={{ user, setUser}}>
      <div>
        Hello
      </div>
    </UserProvider>
  );
}

export default App;
