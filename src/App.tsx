import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Asset from 'pages/Asset';
import Assets from 'pages/Assets';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === '/') {
      navigate('/assets');
    }
  }, []);

  return (
    <Routes>
      <Route path="/assets/:assetContractAddress/:tokenId" element={<Asset />}/>
      <Route path="/assets" element={<Assets />} />
    </Routes>
  );
};

export default App;
