import Image from 'next/image';

import Bird from '../../../../public/bird.jpg';

const Image3 = () => {
  return (
    <>
      <h1>Imageコンポーネント(画像をimport)</h1>
      <Image src={Bird} alt="bird" />
    </>
  );
};

export default Image3;
