# What are these files?

Because I want this site to be statically generated, I need a way to get the lists of files in the posts and projects directories to build the lists. I can't do that at run-time in the browser, and I really don't want to include a global index of the entire site all the time. The solution is to use the `preval` Babel plugin/macro to do that job for me, but at compile time.

## `metaGetter.js`

Has functions to do the reading or whatever.

## `get[All/Featured][Posts/Projects].ts`

Use the macro to always export the data.

Why are they in their own files? This is to assist with Webpack's tree shaking. If they're all in one file then Webpack doesn't remove the unused functions, so having extra files ensures that only the relevant data is provided to the correct pages.

Note that you can't just have a function and call that with whatever directory you want. Since the execution is done at compile time there's no way to pass parameters (as the code isn't actually being run). So there needs to be a separate function for each bit of data.
