require 'sinatra/base'
require 'mustache/sinatra'
require 'sequel'

class Rageriffic < Sinatra::Application
  enable :sessions

  set :mustache, {
    :views     => 'views/',
    :templates => 'templates/'
  }

  get '/' do
    #"Hello, World!"
    mustache :startgame
  end
end

