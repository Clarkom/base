class CreateCabModels < ActiveRecord::Migration[5.1]
  def change
    create_table :cab_models do |t|
      t.string :name
      t.text :description
      t.date :manufacture_year
      t.references :fuel_type, foreign_key: true
      t.string :sheet_metal
      t.integer :power_hp
      t.integer :number_places

      t.timestamps
    end
  end
end
