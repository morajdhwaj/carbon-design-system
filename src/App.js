import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';

function App() {
  return (
    <BrowserRouter>
      <Theme theme='g100'>
        <TutorialHeader />
      </Theme>
      <Content>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/repos' element={<RepoPage />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
