require 'sinatra/base'
require 'mustache/sinatra'
require 'sequel'

class Rageriffic < Sinatra::Application
  require 'views/layout'
  enable :sessions

  set :mustache, {
    :views     => File.expand_path('views/'),
    :templates => File.expand_path('templates/')
  }

  get '/' do
    #"Hello, World!"
    mustache :startgame
  end
end

