import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Welcome to My Yelp!</h1>
            <button onClick={signOut}>Sign Out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;