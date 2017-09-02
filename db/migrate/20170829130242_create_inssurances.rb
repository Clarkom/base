class CreateInssurances < ActiveRecord::Migration[5.1]
  def change
    create_table :inssurances do |t|
      t.references :expense
      t.references :insurer
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
