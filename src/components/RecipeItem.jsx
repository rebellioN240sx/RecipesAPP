const RecipeItem = ({ product }) => {
    const { name, ingredients, time, image } = product;
    return (
            <div class=" bg-slate-50 shadow-md rounded px-4 py-4">
                <img class="w-full" src={image} alt=""></img>
                <div class="px-4 py-4">
                    <div class="font-bold text-xl mb-2">{name}</div>
                    <p class="text-black font-bold">
                        Ingredientes:
                    </p>
                    <p class="text-gray-500 text-base">
                        {ingredients}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{time}</span>
                </div>
            </div>
    );
};

export default RecipeItem;