import Image from 'next/image';

const Image1 = () => {
  return (
    <>
      <h1>Imageコンポーネント(必須属性のみ)</h1>
      <Image src="/bird.jpg" alt="bird" width={1280} height={852} />
    </>
  );
};

export default Image1;
