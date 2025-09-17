import { API_URL,IMAGE_BASE_URL,CATEGORIES } from "../constant";

function Category() {
    

    // async function fetchImageData(){
    //     const response = await fetch(API_URL);
    //     const data = await response.json();
    //     console.log(data.data.cards[0].card.card.gridElements.infoWithStyle.info[0].imageId);
    // }

    
    
    return (
        <div className="py-8 px-4 max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">What's on your mind?</h2>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {CATEGORIES.map((category) => (
                    <div 
                        
                    >
                        {/* Category Image */}
                        <div className="relative overflow-hidden rounded-full w-20 h-20 sm:w-24 sm:h-24 mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                                alt={category.accessibility.altText}
                                src={IMAGE_BASE_URL + category.imageId}
                                loading="lazy"
                            />
                        </div>
                        
                        {/* Category Name */}
                        <span className="text-sm font-medium text-gray-700 text-center group-hover:text-orange-600 transition-colors duration-200">
                            {category.action.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

}export default Category;