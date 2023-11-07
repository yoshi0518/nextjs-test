import Image from 'next/image';

import Bird from '../../../../public/bird.jpg';

const Image7 = () => {
  return (
    <>
      <h1>Imageコンポーネント(可変サイズ)</h1>
      <h2>Responsive</h2>
      <div className="flex items-center justify-center">
        <div className="flex min-h-screen flex-col md:flex-row">
          <Image
            src={Bird}
            alt="bird"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full flex-1 object-cover"
          />
          <div className="flex-1 p-4">
            <h3>Title</h3>
            <p>text text text text text</p>
          </div>
        </div>
      </div>

      <h2>Grid</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,auto))] gap-2">
        {[...Array(5)].map((_, index) => {
          return (
            <div key={index} className="relative h-[400px]">
              <Image src={Bird} alt="bird" className="object-cover" fill />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Image7;
