export const validateForm = (object: Record<string, any>, type: 'Login' | 'Register') => {
    let fieldsToValidate: string[] = [];
    if (type === 'Login') {
        fieldsToValidate = ['email', 'password'];
    } else if (type === 'Register') {
        fieldsToValidate = ['name', 'email', 'password'];
    }
    let error = fieldsToValidate.some((field) => {
        return object[field].trim() === '';
    });
    return error;
};
