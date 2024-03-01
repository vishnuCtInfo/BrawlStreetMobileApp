
export function timeCalculateLogic(time) {
    time = parseInt(time);
    if (time === 1) return `${time} Hour`;
    if (time < 24) return `${time} Hours`;

    const hour = parseInt(time % 24);
    const day = parseInt(time / 24);
    if (day === 1 && hour === 0) return `${day} Day`;
    if (day === 1 && hour === 1) return `${day} Day ${hour} Hour`;
    if (day === 1 && hour > 1) return `${day} Day ${hour} Hours`;

    if (day >= 1 && hour === 0) return `${day} Days`;
    if (day >= 1 && hour === 1) return `${day} Days ${hour} Hour`;
    if (day >= 1 && hour > 1) return `${day} Days ${hour} Hours`;

}

export function timeIsHour(time) {
    if (time < 24) return 1;

    const day = parseInt(time % 24);
    if (time === 0) return 0;
    else return 1;

}