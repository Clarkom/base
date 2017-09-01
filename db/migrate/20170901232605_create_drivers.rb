class CreateDrivers < ActiveRecord::Migration[5.1]
  def change
    create_table :drivers do |t|
      t.string :first_name
      t.string :last_name
      t.date :birth_date
      t.integer :mobile_phone
      t.integer :home_phone
      t.string :driving_license_number
      t.string :home_adress

      t.timestamps
    end
  end
end
