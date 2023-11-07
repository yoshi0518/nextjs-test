import Image from 'next/image';

import Bird from '../../../../public/bird.jpg';

const Image8 = () => {
  return (
    <>
      <h1>Background</h1>
      <div className="fixed -z-50 h-screen w-screen">
        <Image src={Bird} alt="bird" className="object-cover" quality={100} sizes="100vw" fill />
      </div>
      <div className="p-4">
        <h2>Title</h2>
        <p>text text text text text</p>
      </div>
    </>
  );
};

export default Image8;
