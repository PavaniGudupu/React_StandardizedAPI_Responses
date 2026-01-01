export const success = (data) => ({
    success: true,
    response: data,
    failure: false,
    reason: null
});


export const failure = (reason) => ({
    success: false,
    response: null,
    failure: true,
    reason
});