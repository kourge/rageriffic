class CreateParticipations < ActiveRecord::Migration
  def change
    create_table :participations do |t|
      t.integer :round_id
      t.boolean :owner
      t.string :face

      t.timestamps
    end
  end
end
