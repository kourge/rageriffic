class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.string :face
      t.boolean :over
      t.integer :winner_id

      t.timestamps
    end
  end
end
