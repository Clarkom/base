class CreateManagerTake < ActiveRecord::Migration[5.1]
  def change
    create_table :manager_takes do |t|
      t.references :income, foreign_key: true
      t.references :manager, foreign_key: true
      t.date :date

      t.timestamps
    end
  end
end
