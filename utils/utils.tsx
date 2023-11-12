const utils = {
    timeToString: (time: number): string => {
        if (time < 60) {
            return `${time}s`;
        } else if (time < 3600) {
            return `${Math.floor(time/60)}m`;
        } else {
            return `${Math.floor(time/3600)}h`;
        }
    }
}

export default utils;