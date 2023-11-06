import Image from 'next/image';

const Image4 = () => {
  return (
    <>
      <h1>Imageコンポーネント(リモートサイトの画像)</h1>
      <Image src="https://reffect.co.jp/images/bird.jpg" alt="bird" width={1280} height={852} />
    </>
  );
};

export default Image4;
