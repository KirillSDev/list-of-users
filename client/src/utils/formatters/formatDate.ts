import { format } from 'date-fns';

export const formatDate = (date: string | null) => {
    if (date !== null) {
        return format(new Date(date), 'Pp');
    } else {
        return 'The user has not logged in yet';
    }
};
