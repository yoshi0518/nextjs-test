import Image from 'next/image';

const Image2 = () => {
  return (
    <>
      <h1>Imageコンポーネント(Priority)</h1>
      <Image src="/bird.jpg" alt="bird" width={1280} height={852} priority />
    </>
  );
};

export default Image2;
