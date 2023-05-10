type CheckForBadArgs<Arg> = Arg extends any[] ? "You cannot two arrays using deepEqualCompare" : Arg; 

export const deepEqualCompare = <Arg>(a:CheckForBadArgs<Arg>, b:CheckForBadArgs<Arg>):boolean => {
    if(Array.isArray(a) || Array.isArray(b)) {
        throw new Error('You cannot comapare two arrays using deepEqualCompare');
    }
    return a ===b;
}

deepEqualCompare(1, 1);
deepEqualCompare([], ["a"])