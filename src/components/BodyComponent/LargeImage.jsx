/* eslint-disable react/prop-types */
export default function LargeImage({image, hidde}){
     return (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative max-w-3xl mx-auto">
            <button
               onClick={hidde}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
            <img alt="Large Image"  src={image} className="max-w-full rounded max-h-full" />
          </div>
        </div>
     )
}