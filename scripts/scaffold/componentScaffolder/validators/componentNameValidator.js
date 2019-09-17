module.exports = function validate(componentName) {
    if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
        throw 'Name should start with an uppercase letter and contain only letters and numbers.';
    }
}