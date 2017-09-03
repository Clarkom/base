class CreateDamages < ActiveRecord::Migration[5.1]
  def change
    create_table :damages do |t|
      t.references :damage_type, foreign_key: true
      t.references :expense, foreign_key: true
      t.references :driver, foreign_key: true
      t.date :date
      t.float :kilometers

      t.timestamps
    end
  end
end
