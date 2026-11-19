# Learn Coding by Making a Game

Hi! This is a repo that will teach you coding by making a game work.

## Background: What is computer programming?

So if I'm going to teach you this programming thing, you deserve to know
up-front what it is. "Programming" is short for "Computer programming" and the
word "program" is actually the most boring word there, akin to the
program/programme that you get if you attend a play at the theater/theatre:

> **Program**: _n_. A structured schedule for a live production outlining the
> cast of performers, the sequence of events that they will perform, and any
> breaks or intermissions in that sequence.

The "performers" in your computer program include data structures and functions,
and the program is just a written specification of how they are sequenced, how
they will behave together.

As for what is a computer, you might be surprised to find out that _we don't
fully know_. Like, we _have them_, and they are a subset of _machines_, but we
don't have a full exhaustive understanding of what those machines can do. But we
can at the very least say that they're good at certain things:

- **Math**. Originally computers were invented to do math more reliably: skilled
  humans multiplying 5-digit numbers might take 10 seconds and have a 1% failure
  rate, computers these days do that multiplication over a quadrillion times
  more accurately, and we've sped them up to about 100 billion times faster than
  we can do it.
- **Art**. This is what you mostly use them for. Computers are able to take
  images and sounds and reduce them to a common baseline called "data" or
  "information", archive them indefinitely, then blast them across the world in
  a hundred milliseconds to be perfectly reconstructed there.
- **Control**, which is technically called "transduction." They can be used to
  control robot arms and flight surfaces and screen displays, and speakers, and
  there are a variety of input transducers like microphones, mice, keyboards,
  tablet pens, touchscreens, steering wheels, to allow computers to be
  dynamically controlled by sensing things in the external world.
- **Graphs**. This is a bit harder to explain, it is the idea of having certain
  information "in front of you" and it "points" to other data that you can go
  and fetch and bring it in front of you, and now that data can point to other
  data. The internet is a big graph of websites and you click a link and go to
  another page, for instance. As you follow these pointers through the graph we
  say that you "walk" through it, and the information that you take with you as
  you walk through a graph is called your "state," as in "a stateful walk" or "a
  state variable", but that term can also just refer to the status of some part
  of the system.

So the punchline is that a game is the perfect way to dip into all of these
things. A computer game is a **user-controlled** walk through a **graph** of
game-states, which have **art** to reward you for some actions or punish you for
others. How much math you include is up to you.

## More about this game

There are a **lot** of mancala games, this is focused on the Abapa variant of
Oware (also spelled Awari), which is the most practiced mancala tournament game.

In mancala games, there are a bunch of pits called houses dug or carved into a
game board, and filled with seeds or beads. During a turn you pick up all the
game pieces in a house and distribute them one-by-one around the track. You may
have played variants where you score a seed into your score-pile as you go
around the track, or variants where landing in an empty space across from a
large pile of seeds wins you those seeds. Those are different games and not the
same rules, but you can choose to make the game your own if you'd like, I won't
tell anyone.

## Enough Talk: How to get started

This exercise is divided into several **days**, but you don't have to do exactly
one per day.

- [Day 1: Getting Started with Code](./tasks/day01-get-started-with-code.md)
