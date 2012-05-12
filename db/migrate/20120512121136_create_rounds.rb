class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.string :face
      t.bool :over
      t.int :winner_id

      t.timestamps
    end
  end
end
