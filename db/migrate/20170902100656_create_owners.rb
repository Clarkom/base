class CreateOwners < ActiveRecord::Migration[5.1]
  def change
    create_table :owners do |t|
      t.string :first_name
      t.string :last_name
      t.integer :home_phone
      t.integer :mobile_phone

      t.timestamps
    end
  end
end
