import { useState } from 'react';

function ContadorIncremental({ incremento, valorInicial, velocidad }) {
    const [contador, setContador] = useState(valorInicial);
    setTimeout(() => {
      console.log("SUMANDO!!!")
      setContador(contador + incremento);
    }, velocidad);
    console.log("incremento: ", incremento)
    console.log("valorInicial: ", valorInicial)
    console.log("contador: ", contador)
    return (
        <div>
            Segundos en el sitio {contador}
        </div>
    );
}

export default ContadorIncremental;
