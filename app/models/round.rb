class Round < ActiveRecord::Base
  has_many :participations
  has_many :votes
  before_save :force_unfrozen

  def force_unfrozen
    self.is_frozen = false
    true
  end

end
