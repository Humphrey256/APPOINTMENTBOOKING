<<<<<<< HEAD
=======

>>>>>>> bfee5f250fffeb4e5d8be21b911feedbe1ecbad3
export const formatDate = (date, config) => {
    const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const options = config ? config : defaultOptions;

    return new Date(date).toLocaleDateString('en-US', options);
};