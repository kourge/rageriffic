require 'sinatra'
require 'sequel'

class Rageriffic < Sinatra::Application
  enable :sessions

  get '/' do
    "Hello, World!"
  end
end

