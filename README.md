# Unexpected Early Exit in TypeScript For Loop

This code demonstrates an unexpected behavior when using an early exit within a TypeScript `for` loop.  The `printNumbers2` function is intended to print numbers from 1 to `n`, but it prematurely terminates the loop when `i` reaches 3.

The issue highlights the need to carefully consider the implications of early exits (using `return` statements) in loops, particularly when there's a potential for unexpected control flow interruptions.