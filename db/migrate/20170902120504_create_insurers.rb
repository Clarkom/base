class CreateInsurers < ActiveRecord::Migration[5.1]
  def change
    create_table :insurers do |t|
      t.string :name
      t.string :picture
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
