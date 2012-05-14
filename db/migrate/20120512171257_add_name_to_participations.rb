class AddNameToParticipations < ActiveRecord::Migration
  def up
    add_column :participations, :name, :string
  end
  def down
    remove_column :participations, :name
  end
end
