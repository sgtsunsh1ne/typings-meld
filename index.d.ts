declare namespace meld {

    declare interface Joinpoint {
        target: any;
        args: Array<any>;
        method: String;
        proceed: Function;
        proceedApply: Function;
        proceedCount: Function;
    }
    declare type AroundFunction = (joinpoint: Joinpoint) => void;
    declare type AfterReturningFunction = (returnValue: any) => void;
    declare type AfterThrowingFunction = (thrownException: Error) => void;
    declare type AfterFunction = (returnValueOrThrownException: any) => void;

    function before(object: Object, match: string, beforeFunction: Function): void;
    function before(object: Object, match: RegExp, beforeFunction: Function): void;
    function before(object: Object, match: Array<string>, beforeFunction: Function): void;
    function before(object: Object, match: Function, beforeFunction: Function): void;

    function around(object: Object, match: string, aroundFunction: AroundFunction): void;
    function around(object: Object, match: RegExp, aroundFunction: AroundFunction): void;
    function around(object: Object, match: Array<string>, aroundFunction: AroundFunction): void;
    function around(object: Object, match: Function, aroundFunction: AroundFunction): void;

    function on(object: Object, match: string, onFunction: Function): void;
    function on(object: Object, match: RegExp, onFunction: Function): void;
    function on(object: Object, match: Array<string>, onFunction: Function): void;
    function on(object: Object, match: Function, onFunction: Function): void;

    function afterReturning(object: Object, match: string, afterReturningFunction: AfterReturningFunction): void;
    function afterReturning(object: Object, match: RegExp, afterReturningFunction: AfterReturningFunction): void;
    function afterReturning(object: Object, match: Array<string>, afterReturningFunction: AfterReturningFunction): void;
    function afterReturning(object: Object, match: Function, afterReturningFunction: AfterReturningFunction): void;

    function afterThrowing(object: Object, match: string, afterThrowingFunction: AfterThrowingFunction): void;
    function afterThrowing(object: Object, match: RegExp, afterThrowingFunction: AfterThrowingFunction): void;
    function afterThrowing(object: Object, match: Array<string>, afterThrowingFunction: AfterThrowingFunction): void;
    function afterThrowing(object: Object, match: Function, afterThrowingFunction: AfterThrowingFunction): void;

    function after(object: Object, match: string, afterFunction: AfterFunction): void;
    function after(object: Object, match: RegExp, afterFunction: AfterFunction): void;
    function after(object: Object, match: Array<string>, afterFunction: AfterFunction): void;
    function after(object: Object, match: Function, afterFunction: AfterFunction): void;

    function joinpoint(): Joinpoint;
}
declare function meld(object: Object, match: string, advices: Object): void;
declare function meld(object: Object, match: RegExp, advices: Object): void;
declare function meld(object: Object, match: Array<string>, advices: Object): void;
declare function meld(object: Object, match: Function, advices: Object): void;

declare function meld(functionToAdvise: Function, advices: Object): void;

export = meld;