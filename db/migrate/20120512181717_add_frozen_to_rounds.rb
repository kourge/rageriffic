class AddFrozenToRounds < ActiveRecord::Migration
  def change
    add_column :rounds, :frozen, :boolean

  end
end
