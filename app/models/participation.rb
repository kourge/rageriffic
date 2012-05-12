class Participation < ActiveRecord::Base
  belongs_to :round
  has_many :votes
  #has_one :vote_as_voter, :foreign_key => 'voter', :class_name => 'Vote'
  #has_one :vote_as_votee, :foreign_key => 'votee', :class_name => 'Vote'
end
