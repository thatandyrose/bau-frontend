# bau-frontend dev report

> Visit app at: http://bau-frontend.surge.sh

## dev Summary

My aim with the app was to really stay true to the lean principles of an MVP. That is, make a minimum thing that feels somewhat complete, as opposed to an ambitious thing that feels half done.

![mvp](https://pbs.twimg.com/media/BzUBDdhCEAAdmsp.jpg)

To be honest, I don't think I entirely succeeded. I think the end app is TOO simple functionality wise and backend wise there's a bit too much techincal debt even at this stage.

The reasons for this are just time. I spent TOO MUCH time thinking about/playing with the UI/Design (I'm not a designer so this took too long) and underestimated some of the complexity on the backend.

The main issues with the finished product are:

- Although I'm satisfied with the test coverage on the backend, I'm very unhappy about how the tests are structured.
- The frontend app is TOO simple.
- I'm not completely satisfied with how the assigning service is implemented, but I'm ok with this since it's backed up by tests.
- I'm not happy with naming. Why didn't I name `rota_assignments` just `shifts`?? (it was too late once I realised)

More details to follow...

## dev Approach

I took a UX approach to this project. Meaning I started by playing around with the UI with no backend at all. I simply called fake methods and mocked repsonses I thought I would need on the frontend, and by doing this I started to understand how my backend would have to behave and serve the user facing app.

Once I had the frontend app in place, I then wrote request specs for the endpoints I knew I needed, and I also wrote some service specs for a class I knew I wanted to abstract all the logic into (without yet knowing how I would implement it).

Once I had all the tests in place, I implemented them until they all passed.

## tech stack choices

On the backend I went with a pretty vannila rails app. Nothing too exciting there. Been workng with rails mostly for the past few years so it was a no brainer.

On the frontend I went with Vue. Been working with Vue for a while now, and of all the frontend frameworks it's by far the most pragmatic. Once it's set up, it's even easier to prototype than writing plain markup/js.

## a note on CSS

A quick note on CSS is needed here as I was trying something new.

I'm not traditionally a frontend developer (I think of myself as fullstack) but I've always stuggled with css architecture. Not css itself, I get that. But more how to structure css.

I started my carreer with plain css, which of course is a mess. Then everyone started doing SASS and LESS and that didn't help much. I recenlty worked with some OO CSS focused frameworks and although those looked good on paper, the end result was always the same. Messy, hard to understand css.

I recently caught a podcast about a utility first css approach and so far have really enjoyed it.

http://www.fullstackradio.com/68

In this project I haven't used a framework. Mainly because time was tight, and I didn't want to spend time learning a new framwwork.

Instead I just wrote my own utilities that I needed, complementing with "components" (eg. `btn-bau`) if necessary.

The end result is of course still messy css since I wrote the utilities classes myself on the fly without much thought. But it was good to use the approach, and in the future, if you replace my classes with the utility framework you start to get some great css.

## testing

Usually on my rails projects I like to write quite a few integration tests that not only test the end to end flow of my app, but as a result end up testing the UI/JS too (via Capybara).

However, since this was a seperate SPA repo, capybara wouldn't work here without some messy setup which I didn't want to spend time with. As a result, this app has no tests for the frontend.

I'm in two minds about. Firtly, for how simple it is now, I'm ok with it. I'm also not a massive fan of frontend unit tests for relatively simple js. I think frontend tests are much more useful when they are integration tests. But I've yet to find a good way to do this when the app is an SPA.

Otherwise, the backend is backed up by tests, which I'm ok with.

As I said earlier, I'm pretty unhappy with how the tests are structured. I would have liked to have put more thought into structuring the tests so that it is more clear which "rules" each test is testing. However I didn't have enough time, and what we ended up with is the first draft of tests which, although they work, are not entirely clear.

## what I would change

Apart from the tests, I'd also like to improve the assigner implemtation. Right now its:

a. not that elegant.
b. not very peformant.

In fact it could be much simpler and more peformant, but time. And having said that, for an MVP, it's fine.

Also, the app itself is TOO simple. There's no way to delete, update, there's no flexiability on what can be done from a user's point of view. Again, I think I wans't smart enough with my time. But, I think back to that MVP image with the skate board, and the bicycle, and the car, and I think... it's ok, this is the skate board.

# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
