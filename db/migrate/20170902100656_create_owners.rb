class CreateOwners < ActiveRecord::Migration[5.1]
  def change
    create_table :owners do |t|
      t.string :full_name
      t.integer :home_phone, :limit => 5
      t.integer :mobile_phone, :limit => 5
      t.string :cin

      t.timestamps
    end
  end
end
