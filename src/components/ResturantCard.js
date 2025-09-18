import { IMAGE_BASE_URL } from "../constant";
function RestaurantCard(props) {
  const { 
    name, 
    cloudinaryImageId, 
    avgRating ,
    sla,
    cuisines,
    locality,
    aggregatedDiscountInfoV3
} = props.info;
  return (
    <div className="max-w-sm w-full flex">
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200">
        <div className="relative">
          <img
            src={IMAGE_BASE_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-48 object-cover block"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
            }}
          />
          <div className="absolute left-4 bottom-3">
            <span className="inline-block text-white font-extrabold text-xl tracking-wider drop-shadow-lg">
              {aggregatedDiscountInfoV3 && ( aggregatedDiscountInfoV3?.header + aggregatedDiscountInfoV3?.subHeader)}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>

          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.118 3.424a1 1 0 00.95.69h3.6c.969 0 1.371 1.24.588 1.81l-2.91 2.11a1 1 0 00-.364 1.118l1.118 3.424c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.91 2.11c-.785.57-1.84-.197-1.54-1.118l1.118-3.424a1 1 0 00-.364-1.118L3.394 8.85c-.783-.57-.38-1.81.588-1.81h3.6a1 1 0 00.95-.69l1.118-3.424z" />
              </svg>
            </span>

            <span className="text-gray-700 font-medium">{avgRating}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{sla?.slaString}</span>
          </div>

          <p className="text-gray-500 mb-3">
            {cuisines.join(", ")}
          </p>

          <p className="text-gray-500 font-medium">{locality}</p>
        </div>
      </article>
    </div>
  );
}

export default RestaurantCard;
