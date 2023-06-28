const RecipesForm = ({ onSubmit }) => {
    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form[0].value;
        const ingredients = form[1].value;
        const time = form[2].value;
        const image = form[3].value;
        const recipe = { name, ingredients, time, image};
        onSubmit(recipe);
        form.reset();
    };

    return (
        <div class="flex flex-col items-center">
        <span class="flex place-items-center text-[80px] mx-5 my-5 px-10  rounded-[16px] box-decoration-slice bg-gradient-to-r from-blue-700 to-blue-300 text-white ...">
                App Recetas<br/>
            </span>
            <form class="w-full max-w-lg bg-slate-50 shadow-md rounded px-8 pt-6 pb-2 mb-2" onSubmit={submit}>
                <div class="w-full md:w-auto px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Nombre de la receta
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Pollo a la naranja" />
                </div>
                <div class="w-full md:w-auto px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Ingredientes
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Pollo, Naranja, Cebolla... " />
                </div>
                <div class="w-full md:w-auto px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Tiempo de Elaboracion
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="2 horas" />
                </div>
                <div class="w-full md:w-auto px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Imagen URL
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="https://www.sitio.com/images/imagen.jpg" />
                </div>
                <div class="w-full md:w-auto px-3 mb-6 md:mb-0 flex flex-col items-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded" type="submit">Guardar receta</button>
                </div>
            </form>
        </div>
    );
};

export default RecipesForm;