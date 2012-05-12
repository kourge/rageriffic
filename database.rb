
require 'sequel'

DB = Sequel.connect(ENV['REMOTE_DATABASE_URL'])

class Round < Sequel::Model
end

class Participation < Sequel::Model
  many_to_one :round, :key => :rid
end

class Vote < Sequel::Model
  many_to_one :round, :key => :rid
end

class Preset < Sequel::Model
end

