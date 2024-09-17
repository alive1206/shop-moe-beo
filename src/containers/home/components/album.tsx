import { map } from "lodash";
import { Image } from "./mock-data";

export const Album: React.FC = () => {
  return (
    <div>
      <div className=" grid  grid-cols-4 justify-items-center gap-6 max-[992px]:grid-cols-3 max-[768px]:grid-cols-2 max-[576px]:grid-cols-1">
        {map(Image, (item) => {
          return (
            <div
              className="card overflow-hidden transition-all duration-500 album-wrapper relative aspect-square cursor-pointer rounded-[3px]"
              key={item.id}
            >
              <img
                className="object-cover size-[250px] grayscale hover:grayscale-0 transition-all duration-500"
                src={item.src}
                alt={item.title}
              />
              <p className="album-title opacity-0 transition-all duration-300 absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[999px] bg-gradient-to-b from-transparent to-black text-white w-full text-center">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
