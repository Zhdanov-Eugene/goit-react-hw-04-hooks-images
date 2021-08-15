import { useState } from 'react';

import ImageGallery from './components/ImageGallery/ImageGallery';
import Layout from './components/Layout/Layout';
import Searchbar from './components/Searchbar/Searchbar';

export default function App() {
  const [imageName, setImageName] = useState('');

  const handleFormSubmit = imageName => {
    setImageName(imageName);
  };

  return (
    <Layout>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery imageName={imageName} />
    </Layout>
  );
}