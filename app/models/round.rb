class Round < ActiveRecord::Base
  has_many :participations
  has_many :votes
  before_save :force_unfrozen, :get_face

  def force_unfrozen
    self.is_frozen ||= false
    true
  end

  def get_face
    self.face ||= Preset.random.face
  end

end
