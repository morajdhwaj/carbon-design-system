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
          <Route exact path='/' component={LandingPage} />
          <Route path='/repos' component={RepoPage} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
