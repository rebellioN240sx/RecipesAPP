import { useEffect, useState } from "react";
import RecipesForm from "./RecipesForm";
import RecipeItem from "./RecipeItem";

const RecipesList = () => {
    //uso de estados
    const [productCount, setProductCount] = useState(0);
    const [products, setProducts] = useState([
        
    ]);

    const addproduct = (product) => {
        setProducts([...products,product]);    
    };

    //muestra y actuliza la cantidad de elementos que hay
    useEffect(() => {
        setProductCount(products.length);
    }, [products]);

    return (
        <>
            <RecipesForm onSubmit={addproduct} />
            <div class="flex flex-col items-center">
                <span class="flex place-items-center text-[30px] mx-5 my-5 px-10 py-3 rounded-[16px] box-decoration-slice bg-gradient-to-r from-blue-700 to-blue-300 text-white ...">
                    Total Recetas: {productCount}<br />
                </span>
            </div>
            <ul class="grid grid-cols-4 place-items-center">
                {products.map((product) => (
                    <li class="mx-5 my-2" >
                        <RecipeItem product={product} />
                    </li>
                ))}
            </ul>
        </>
    );
};
export default RecipesList;