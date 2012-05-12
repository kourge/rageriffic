require 'sinatra/base'
require 'mustache/sinatra'

require 'database.rb'

class Rageriffic < Sinatra::Application
  enable :sessions

  set :root, File.dirname(__FILE__)
  set :mustache, {
    :views     => File.expand_path('views/'),
    :templates => File.expand_path('templates/')
  }

  register Mustache::Sinatra
  require 'views/layout'

  get '/' do
    #"Hello, World!"
    mustache :startgame
  end

  get '/host-start' do
    mustache :"host-start"
  end

  get '/nonhost-start' do
    mustache :"nonhost-start"
  end

  get '/results' do
    mustache :"results"
  end

  get '/present-picture' do
    mustache :"present-picture"
  end

  get '/take-picture' do
    mustache :"take-picture"
  end

  get '/vote' do
    mustache :vote
  end

  get '/db_test' do
    Round[0].inspect
  end
end

