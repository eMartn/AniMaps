// Animations
export const animationOne = {

    in:{
opacity: 1

    },
    out:{
        opacity: 0
    }
};

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