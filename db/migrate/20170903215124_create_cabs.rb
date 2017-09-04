class CreateCabs < ActiveRecord::Migration[5.1]
  def change
    create_table :cabs do |t|
      t.references :cab_model, foreign_key: true
      t.string :license_plate
      t.string :agreement_number
      t.decimal :total_mileage

      t.timestamps
    end
  end
end
