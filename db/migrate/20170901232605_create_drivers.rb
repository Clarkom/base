class CreateDrivers < ActiveRecord::Migration[5.1]
  def change
    create_table :drivers do |t|
      t.string :full_name
      t.date :birth_date
      t.integer :mobile_phone, :limit => 5
      t.integer :home_phone, :limit => 5
      t.string :driving_license_number
      t.string :home_address
      t.string :cin
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
