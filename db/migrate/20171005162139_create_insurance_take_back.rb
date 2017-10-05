class CreateInsuranceTakeBack < ActiveRecord::Migration[5.1]
  def change
    create_table :insurance_take_backs do |t|
      t.references :income, foreign_key: true
      t.references :insurance, foreign_key: true
    end
  end
end
