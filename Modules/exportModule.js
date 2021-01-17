// first way to export 
export const capitalise = str => str.toUpperCase();

// or we can do:
const firstCapitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export { firstCapitalise };
// export default
export default function foo() { return 42; }
