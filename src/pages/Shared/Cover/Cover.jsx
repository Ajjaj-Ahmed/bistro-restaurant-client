import React from 'react';
import { Parallax} from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
        className='rounded-3xl'
        blur={{ min: -55, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
           <div className="hero h-[600px]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    </Parallax>
        
     
    );
};

export default Cover;