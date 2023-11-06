import Image from 'next/image';

const Image6 = () => {
  return (
    <>
      <h1>Imageコンポーネント(Quality)</h1>
      <h2>Quality：75(Default)</h2>
      <div style={{ position: 'relative', width: '400px', height: '400px', backgroundColor: 'gray' }}>
        <Image src="/bird.jpg" alt="bird" fill style={{ objectFit: 'cover' }} />
      </div>

      <h2>Quality：100</h2>
      <div style={{ position: 'relative', width: '400px', height: '400px', backgroundColor: 'gray' }}>
        <Image src="/bird.jpg" alt="bird" fill quality={100} style={{ objectFit: 'cover' }} />
      </div>

      <h2>Quality：50</h2>
      <div style={{ position: 'relative', width: '400px', height: '400px', backgroundColor: 'gray' }}>
        <Image src="/bird.jpg" alt="bird" fill quality={50} style={{ objectFit: 'cover' }} />
      </div>
    </>
  );
};

export default Image6;
