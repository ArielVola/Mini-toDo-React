import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote } = !!data && data[0];


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

                <blockquote className='blockquote text-end'>
                    <p className='mb-4'>{ quote }</p>
                </blockquote>

            <button className='btn btn-primary' onClick={ increment }>Siguiente frase</button>
        </div>
    )
}
