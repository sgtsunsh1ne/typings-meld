declare namespace meld {
    declare interface Joinpoint {
        target:any;
        args: Array<any>;
        method: String;
        proceed: Function;
        proceedApply: Function;
        proceedCount: Function;
    }
    declare type AroundFunction = (joinpoint:Joinpoint) => void;
    declare type AfterReturningFunction = (returnValue: any) => void;
    declare type AfterThrowingFunction = (thrownException: Error) => void;
    declare type AfterFunction = (returnValueOrThrownException: any) => void;

    function before(object:Object, match:string, beforeFunction:Function):void;
    function around(object:Object, match:string, aroundFunction:AroundFunction):void;
    function on(object:Object, match:string, onFunction:Function):void;
    function afterReturning(object:Object, match:string, afterReturningFunction:AfterReturningFunction):void;
    function afterThrowing(object:Object, match:string, afterThrowingFunction:AfterThrowingFunction):void;
    function after(object:Object, match:string, afterFunction:AfterFunction):void;

}
export = meld;