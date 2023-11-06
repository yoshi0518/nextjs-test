import Image from 'next/image';

const Image5 = () => {
  return (
    <>
      <h1>Imageコンポーネント(fill、ObjectFit)</h1>
      <h2>ObjectFit：Contain</h2>
      <p>アスペクト比を維持したまま、画像が親要素に収まるように自動調整</p>
      <div style={{ position: 'relative', width: '400px', height: '400px', backgroundColor: 'gray' }}>
        <Image src="/bird.jpg" alt="bird" fill style={{ objectFit: 'contain' }} />
      </div>

      <h2>ObjectFit：Cover</h2>
      <p>親要素に画像の高さを合わせ、領域に入り切らない部分を自動切り取り</p>
      <div style={{ position: 'relative', width: '400px', height: '400px', backgroundColor: 'gray' }}>
        <Image src="/bird.jpg" alt="bird" fill style={{ objectFit: 'cover' }} />
      </div>
    </>
  );
};

export default Image5;
