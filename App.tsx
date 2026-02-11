
import React, { useState } from 'react';
import Welcome from './screens/Welcome';
import Explore from './screens/Explore';
import Feed from './screens/Feed';
import Encyclopedia from './screens/Encyclopedia';
import Safety from './screens/Safety';
import Booking from './screens/Booking';
import AIAssistant from './screens/AIAssistant';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('WELCOME');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'WELCOME':
        return <Welcome onNext={() => setCurrentScreen('EXPLORE')} />;
      case 'EXPLORE':
        return <Explore onNavigate={setCurrentScreen} />;
      case 'FEED':
        return <Feed onNavigate={setCurrentScreen} />;
      case 'ENCYCLOPEDIA':
        return <Encyclopedia onNavigate={setCurrentScreen} />;
      case 'SAFETY':
        return <Safety onNavigate={setCurrentScreen} />;
      case 'BOOKING':
        return <Booking onNavigate={setCurrentScreen} />;
      case 'AI_ASSISTANT':
        return <AIAssistant onNavigate={setCurrentScreen} />;
      default:
        return <Welcome onNext={() => setCurrentScreen('EXPLORE')} />;
    }
  };

  return (
    <div className="relative mx-auto max-w-[430px] h-[100dvh] bg-background-dark overflow-hidden shadow-2xl border-x border-white/5">
      {renderScreen()}
    </div>
  );
};

export default App;
