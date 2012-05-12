require 'sinatra/base'
require 'mustache/sinatra'
require 'sequel'

class Rageriffic < Sinatra::Application
  enable :sessions

  set :root, File.dirname(__FILE__)
  set :mustache, {
    :views     => File.expand_path('views/'),
    :templates => File.expand_path('templates/')
  }

  require 'views/layout'

  get '/' do
    #"Hello, World!"
    mustache :startgame
  end
end

