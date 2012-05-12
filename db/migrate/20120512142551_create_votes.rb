class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :round_id
      t.integer :voter
      t.integer :votee

      t.timestamps
    end
  end
end
