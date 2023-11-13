const utils = {
    timeToString: (time: number): string => {
        if (time < 60) {
            return `${time}s`;
        } else if (time < 3600) {
            return `${Math.floor(time/60)}m`;
        } else {
            return `${Math.floor(time/3600)}h`;
        }
    },

    randomNumber: (limit: number): number => {
        return (Math.floor(Math.random() * (limit - 0 + 1) + 0));
    }
}

export default utils;