export default string => string.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '-');
