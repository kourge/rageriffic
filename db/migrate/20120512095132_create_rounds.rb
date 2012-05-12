class CreateRounds < ActiveRecord::Migration
  def self.up
    create_table :rounds do |t|
      t.string :face#, :size => 5, :null => false
      t.boolean :ended#, :null => false, :default => false
      t.integer :winner#, :null => false
    end

    #create_table :participations do
      #t.integer :round_id, :null => false
      #t.boolean :owner, :null => false, :default => false
      #t.string :face, :size => 5, :null => false
    #end
    
  end

  def self.down
    drop_table :rounds
    #drop_table :participations
  end
end
