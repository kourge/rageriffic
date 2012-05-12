class AddNameToParticipations < ActiveRecord::Migration
  def change
    add_column :participations, :name, :string
  end
end
