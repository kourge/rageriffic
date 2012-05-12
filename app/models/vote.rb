class Vote < ActiveRecord::Base
  belongs_to :round
  belongs_to :voter, :foreign_key => 'voter_id', :class_name => 'Participation'
  belongs_to :votee, :foreign_key => 'votee_id', :class_name => 'Participation'
end
