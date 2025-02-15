(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    const redFruits: string[] = ['manzana', 'cereza', 'ciruela'];
    function isRedFruit(fruit: string): boolean {
        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitsColors = 'red' | 'yellow' | 'purple';
    const fruitsColor = {
        red: ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas']
    }
    function getFruitsByColor(color: FruitsColors): string[] {
        if (!Object.keys(fruitsColor).includes(color))
            throw Error(`the color must be: ${Object.keys(fruitsColor)}`);

        return fruitsColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps(): string {
        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




