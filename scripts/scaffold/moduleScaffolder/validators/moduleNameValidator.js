module.exports = function validate(moduleName) {
    if (!/^[A-Z][A-Za-z0-9-]+$/.test(moduleName)) {
        throw 'Name should start with an uppercase letter and contain only letters and numbers.';
    }
}