class CreatePresets < ActiveRecord::Migration
  def change
    create_table :presets do |t|
      t.string :face
      t.string :name

      t.timestamps
    end
  end
end
