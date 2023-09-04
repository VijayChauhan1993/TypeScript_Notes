// Functions

function fixValue( val : number) : number {
    return val * 2;
}

// first number key is used to recognise the parameter type and second number key is used to recognise the return type
var fixValue2 = (value: number): number => value * 2;


// difference between void and never return types
/*
void - represents that the return type is void i.e. the function never returns a value.
never - represents that the return is never expected/ observed. It is generally used in the methods which always throws an exception or error.
 */

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handlerError(errmsg: string): never {
    throw new Error(errmsg);
}