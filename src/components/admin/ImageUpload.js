// components/ImageUpload.js
import Image from 'next/image';
import { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);

    const response = await fetch('/api/imageupload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setImageUrl(data.url);
    onImageUpload(data.url); // Pass the image URL to the parent component
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleUpload}>Upload Image</button>
      {imageUrl && <Image src={imageUrl} alt="Uploaded Image" />}
    </div>
  );
};

export default ImageUpload;
