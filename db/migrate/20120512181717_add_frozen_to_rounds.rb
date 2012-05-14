class AddFrozenToRounds < ActiveRecord::Migration
  def up
    add_column :rounds, :frozen, :boolean
  end
  def down
    remove_column :rounds, :frozen
  end
end
