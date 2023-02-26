const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getDuration = (from?: Date | 'present', to?: Date | 'present'): string => {
    if (typeof from === 'string' && typeof to === 'string') return 'present';

    if (from && !to) {
        if (typeof from !== 'string') return `${month[from.getMonth()]} ${from.getFullYear().toString()}`;

        return from;
    }

    if (!from && to) {
        if (typeof to !== 'string') return `${month[to.getMonth()]} ${to.getFullYear().toString()}`;

        return to;
    }

    if (from && to) {
        if (typeof from === 'string' && typeof to !== 'string')
            return `${from} - ${month[to.getMonth()]} ${to.getFullYear().toString()}`;

        if (typeof from !== 'string' && typeof to === 'string')
            return `${month[from.getMonth()]} ${from.getFullYear().toString()} - ${to}`;

        if (typeof from !== 'string' && typeof to !== 'string') {
            if (from.getTime() === to.getTime())
                return `${month[from.getMonth()]} ${from.getFullYear().toString()}`;

            return `${month[from.getMonth()]} ${from.getFullYear().toString()} - ${month[to.getMonth()]} ${to
                .getFullYear()
                .toString()}`;
        }
    }

    return '';
};
