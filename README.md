# JoChain
Really small helper class that allows for function chains to be written linearly.

## Example
```
// PYRAMID OF DEATH
function1(() => {
    function2(() => {
        function3(() => {
            function4(() => {
                function5();
            });
        });
    });
});
```
...turns into:
```
// Ladder of nice
let chain = new Chain();
chain.run(() => {
    function1(() => chain.next());
}, {
    function2(() => chain.next());
}, {
    function3(() => chain.next());
}, {
    function4(() => chain.next());
}, {
    function5();
});
```

## Q&A
### Should I use this?
Probably not.

### Why?
Because promises are standardized, have more features, are officially supported, etc.

### Why are you using this then?
I made this before learning about promise chaining. Now all my projects are built around this. Plus, this has a more consistent syntax.

### Is it performant?
I dunno.

## License
WTFPL v2, because I don't think anyone should be using this.