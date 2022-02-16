import React from 'react'

export const Main = () => {
    return (
        <main className='blog'>
            <div className='blog_izquierda'>
                <div className='blog_izquiera-contenido'>
                    <h2>A Mad Tea-Party</h2>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                    <hr></hr>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className='button'>Go to items</button>
                </div>
            </div>
            <div className='blog_derecha'>
                <img src={'../img/tanjiro.png'}
                    alt='logo'
                    className='img_logo' />
            </div>
        </main>
    )
}
