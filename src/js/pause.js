const pause = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

export default pause;