'use client';
import { useState } from 'react';

const PageFiles = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) setUploadFile(files[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!uploadFile) return;
    const formData = new FormData();
    formData.append('file', uploadFile);

    const response = await fetch('http://localhost:3000/api/files', {
      method: 'POST',
      body: formData,
    });
    console.log(response.json());
  };

  return (
    <>
      <h1>ファイルアップロード</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">アップロード</button>
      </form>
    </>
  );
};

export default PageFiles;
