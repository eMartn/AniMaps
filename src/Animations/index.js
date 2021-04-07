/*
These animations use Framer-motion a motion library for React 
By manipulating the x y values you can create some animations 
& wrap it around the things you want animated.
The methods below do just that and are named accordingly
If you want to learn more about how these animations work
or how to tweak them you can find documentation here
https://www.framer.com/motion/

*/

// Animations
// export const flashAnimation = {
    
//     in:{
//     opacity: 1
//     },
//     middle:{
//         opacity: 0.5
        
//     },
//     out:{
//         opacity: 0
//     }
// };

// this determines how long the animation will last
export const transition = {

    duration: 0.4

}

// const that determines animation two
export const animationTwo = {

    // in effect for when page in loading in
    in:{
        opacity: 1,
        y:0,
        scale:1
    },
    // out effect 
    out:{
        opacity: 0,
        y: '-100vh',
        scale:0.3
    } 


}

export const fromLeftAnimation ={

        in:{
            opacity: 0.8,
            x: 50
        },
        out:{
            opacity: 0.8,
            x: -50
        },
        end:{
            x: 0,
            opacity: 1
        }
};

export const fromRightAnimation ={

    in:{
        opacity: 0.8,
        x: -50
    },
    out:{
        opacity: 0.9,
        x: 50
    },
    end:{
        x: 0,
        opacity: 1
    }
};

export const upAnimation ={

    in:{
        opacity: 0.8,
        y: -300
    },
    out:{
        opacity: 0.7,
        y: 300
    },
    end:{
        y: 0,
        opacity: 1
    }
};
