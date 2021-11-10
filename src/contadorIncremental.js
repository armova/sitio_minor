import { useState } from 'react';

function ContadorIncremental({ incremento }) {
    const [contador, setContador] = useState(10);
    setTimeout(() => {
      setContador(contador + incremento);
    }, 1000);
    return (
        <p>
            mi contador javascript {contador}
        </p>
    );
}

export default ContadorIncremental;