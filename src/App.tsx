
import { ApoliceList } from './components/ApoliceList'
import { ApoliceFormWrapper } from './components/ApoliceFormWarepper'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<ApoliceList />} />
        <Route path="/edit/:id" element={<ApoliceFormWrapper editMode />} />
        <Route path="/create" element={<ApoliceFormWrapper editMode={false} />} />
      </Route>
    </Routes>
  );
}

export default App;
