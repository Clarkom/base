class CreateInsurances < ActiveRecord::Migration[5.1]
  def change
    create_table :insurances do |t|
      t.references :expense
      t.references :insurer
      t.date :start_date
      t.date :expiration_date
      t.string :police_number

      t.timestamps
    end
  end
end
