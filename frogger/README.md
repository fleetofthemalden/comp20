README

Dixon Minnick

Comp 20 Assignment 2/4: Frogger
Comp 120 Assignment 1: Optimizing Frogger
___________________________________________
120:

Collaboration:
None

1) Optimizations done:
-Placed JavaScript tag below content, as not to hinder the content loading first
-Removed Audio (single largest HTTP request)
-Combined sprites into single SpriteSheet (1 fewer request)
-Added all resources to HTML5 offline cache
-Minified Javascript

2) Using Chrome Developer Tools, I can see that all of the HTTP status requests are now 304 Not Modified. When accessing the site for the first time on firefox, I was asked if the website could "store data for offline use". 

3,4)

		 			Before	After
Chrome Dev Tools
Requests:				7	4
Transferred:		288MB	247B
Time				4.80S	186mS

PageSpeed
Rating:				93/100	93/100

YSlow Ratings
Overall:				A	A
Use CDN:				B	A
Expires Headers:		D	D
Small cachable favicon:	B	B
All other categories:	A	A

The improvements made are rather small. The most significant change was the use of cached resources and the removal of the audio file from the game. This reduced both the number and size of the requests made.




___________________________________________

Part 2:

Collaboration:
None

Correctly Implemented:
All basic requirements.

Additionally Implemented:
Dead Frog image.
Sound.
Level Progression.

Time Spent:
7-10 hours.

Additionally, I created an alternate version in the subdirectory "pokemon" using pokemon
sprites. Check it out.

___________________________________________

Part 1:

Collaboration:
I saw an example in the Apple documentation in which each sprite had its
own draw method, so I did the same.

Correctly implemented:
All parts of the assignment and more,
Draw Methods for ALL sprites
Draw method for game initialization
Draw method to display score

Not implemented:
All required parts are implemented.
There is a framework in place to support animation. It does not work.
There is a function to keep track of lives. It works on its own.

Time Spent: 7-14 hours, sorry I can't be more specific. I've been doing it
in bits and pieces.

