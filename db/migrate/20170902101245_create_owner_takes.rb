class CreateOwnerTakes < ActiveRecord::Migration[5.1]
  def change
    create_table :owner_takes do |t|
      t.references :expense, foreign_key: true
      t.references :owner, foreign_key: true
      t.date :date
      t.timestamps
    end
  end
end
