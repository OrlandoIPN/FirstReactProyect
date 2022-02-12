import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';


export const QueueList = () => {

    const getCitas = async () => {
        const url = 'https://jservice.io/api/clues?value=100&category=1420&offset=4';
        const respues = await fetch(url);
        const data = await respues.json();

        const citas = data.map(cita => {
            return {
                answer: cita.answer,
                question: cita.question,
                id:cita.id
            }
        })
        setCitas(citas);
    }

        //Component life cicle :  before renderizing : renderizing : after renderinzing 
        //use effect renderizing once before renderizing and after renderizing. if you use the second parameter 
        //use effect 


    useEffect(() => {       
        getCitas();
    }, []);

    const [cita, setCitas] = useState([]);

    return (
        <>     
        <section className='entradas'>      
                {cita.map((item) =>
                    <div className='entradas_div' key={item.id}>
                        <h2>{item.answer}</h2>
                        <p>{item.question}</p>
                    </div>
                )}
        </section> 
        </>
    )
};






