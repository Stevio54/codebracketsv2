---
title: "Async vs Callback"
date: 2017-10-09T19:15:18-07:00
tags: [cloud programmer,async,callback,promise,node,js,typescript]
headerImage: /assets/images/async.png
draft: false
---

## The Story

### Hello Everyone!

While working with my good friend [@Codydearkland](https://twitter.com/Codydearkland) on some Node JS code we ran into an interesting issue. Do we use **async...await** in our code or make use of the **promise..callback** model when we pull data from another server?

#### What are async...await and promise...callback?

When you use the **async..await** model, you are able to bypass the concept of synchronous code. This means that chunks of your code can run parallel to the rest of your code without blocking its execution.

By making use of **async..await**, you also avoid the use of **promises**, which are objects that can also help you bypass synchronous code by way of a **callback**. A callback is a function or set of logic that you can write that will only be executed when an asynchronous function completes its work. 

#### Ok, back to our story

In this case, he had already been writing the code using the **async...await** model but had been running into runtime errors with his code.

I looked at the code he was using, and the symptoms, and I saw that, in this case, his runtime environment and/or platform did not seem to like the use of the &quot; **async**&quot; keyword.

For example:
```javascript
 
 module.exports=async (req, callback) => {
 
    let result=await requestpromise(opts);
 
    callback(null, result);

 };
 
```
Gave the error:

```javascript
 
 module.exports = async (req, callback) => ...

 SyntaxError: Unexpected token (

     at createScript (vm.js:56:10)
 
```

#### What is happening here?

So, as seen in this code, we are writing an **async** function that will make a call out to another webserver and process the response. **Await** is used here to tell the runtime that we will wait for this line to complete before continuing to the next line.

After all is done, it will then return that result to the calling application.

#### What went wrong?

In this case, since **async...await** is a newer feature in Javascript/NodeJS, it does not seem to be supported here. I would later find that the framework being used by Cody is running on an older version of NodeJS.

#### Resolution ... Promise

I suggested to him that he instead make use of the **promise..callback** model to accomplish the task, since it is an older feature, and should be supported.

Here is the code after a rewrite:

```javascript
 
 module.exports= (req, callback) => {

    requestpromise(opts)

        .then((result) => {

            callback(null, result);

    });

 };
 
 ```

#### What is happening here?
We still have a function that makes a call up to another webserver and processes the response. Only, this time it is being accomplished inside the **callback** function titled "then". 

It is in this callback function that we can capture the response and send it back to the calling application.

Thankfully, the error did not repeat and his code worked as it was intended!

## What is the difference between the promise..callback model and the async..await model?

In the examples above, the difference is somewhat subtle, but the functionality is the same. 

In the **promise..callback** code, the lines are many, but it still accomplishes the task we went out to accomplish. 

With the **async..await** the code does seem a little shorter, and somewhat easier to read if not more elegant. 

However, as we learned here, **async..await** is not always supported.

## Takeaways and things learned

What I take away from this experience, is that there are always multiple ways to accomplish any one task.

In this case, the issue was that the framework he was using had ran on an older version of NodeJS in which **async...await** was not available as a feature. Your situation may vary, but the solution will always be the same…

> **Never get stuck in a corner, the programming toolbox is full of wonders!**

#### Do you have another way you would approach this problem in your code? Please write me a comment, I would love to hear from you!

Cheers!

Steven