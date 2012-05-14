# Rageriffic lets you imitate angry meme faces from the internets

Visit the site at [rageriffic.heroku.com](http://rageriffic.heroku.com).

![example](https://github.com/kourge/rageriffic/raw/master/public/example.png)

Visit the root to get a prompt to start a new game. Creating a game
will give you a link that can be distributed to your friends who can
join you to compete. When the host believes that enough people have joined,
she can start the game through the start button.

Everyone will be given **ten seconds** to take a picture of themselves using their webcams.
When everyone has taken their own picture, all users will be presented with a voting screen.
The user with the most votes wins!

# Authors

Developed by undergraduates at the University of Washington for the May
12-13, 2012 Hack U hackathon.

* Stanley Wang
* Jolie Chen
* Wilson Lee
* Michael Zhou
* David Mah

# Deploy

Want to deploy it yourself? You need:

* >= Ruby 1.9.2
* >= Rails 3
* PostgreSQL
* A slew of gems that are in the gem file

Run `rake setup` and `rails server`

and you're good to hit it on localhost:3000.

You can figure out how to change the config if you want
to have it any other way :).
