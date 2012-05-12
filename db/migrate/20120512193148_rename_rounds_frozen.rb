class RenameRoundsFrozen < ActiveRecord::Migration
  def up
    rename_column :rounds, :frozen, :is_frozen
  end

  def down
    rename_column :rounds, :is_frozen, :frozen
  end
end
