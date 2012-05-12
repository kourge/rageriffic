class RenameVotesVotee < ActiveRecord::Migration
  def up
    rename_column :votes, :votee, :participation_id
    remove_column :votes, :voter
  end

  def down
    rename_column :votes, :participation_id, :votee
    add_column :votes, :voter
  end
end
