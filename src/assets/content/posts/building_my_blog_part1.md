---
title: Building This Blog
date: 2019-05-07T20:20:00-07:00
Subtitle: Part 1 - The journey begins
tags: [blogging,blog,angular,static site,aws,s3,angular universal]
draft: false
---

## And it beings...

It is true that it has been some time since my last blog. As we all know, life sometimes can be unpredictable. Nevertheless, I find myself with an itch to get back to blogging. My philosophy in life is to share as much to the world as I can. It is through this sharing nature that we are able to enrich others.

Enough waffling though, let us get down to brass tax :)

Now, that I had an itch to get back to writing, I found that my blog site also needed a makeover. This meant that I had to think of a fun way to update the site while utilizing skills I have gathered over the years.

## Requirements Gathering

The next question I had to ask myself was...

*What features do I want in my blog going forward?*

What I came down to was this:

* Share options (URL's and common share links)

* Tags (ability to click and search them)

* Latest post's list

* Home page, About page

* Snazzy logo :)

* Easy blog post drafting process

* Most important, the site must be static

  * This will allow me to host via AWS S3 Buckets

Now that I had my requirements all lined up, I had to start to tackle each of them one-by-one.

## Choosing a framework/language/tool

The first thing that I needed to decide was, what was I going to use to build out my blog site?

The previous version of this site was built using **Hugo**. However I have found the template engine in **Hugo** to be very proprietary.

This is why I decided to work towards my own strengths. I spent many years as a Web Developer and as such I have an immense amount of experience in the Angular Framework. For me, it made it a no-brainer to pursue this framework for my blog site.

### Angular & Static Sites

Now that I have chosen the framework and language (Typescript) to use for the new Blog site, I now need to figure out how this can work as a static site.

It turns out, that out of the box Angular does not function as a static site. This required some research. Thankfully, it was not long until I found the following blog post by Kim Turley.

[Medium.com - Generate and host static sites using Angular Universal and Amazon S3](https://medium.com/creative-technology-concepts-code/generate-and-host-static-sites-using-angular-universal-and-amazon-s3-27156cf6f667)

This was an amazing discovery! The concept here is that by using **Angular Universal** we can render all of our pages ahead of time. This allows us to serve them statically :D

### Next Steps

So far, I have found the framework to use (**Angular**) and a way to statically render the site (**Angular Universal**). 

This blog is only the first part of a series. I am hoping no more than 4 blog posts in total. 

Stay tuned! The next blog will be concerned with the visual design of the site.

![Fun!](https://www.mememaker.net/api/bucket?path=static/img/memes/full/2015/Dec/29/10/you-are-gonna-have-a-fun-day.jpg "Fun Meme")