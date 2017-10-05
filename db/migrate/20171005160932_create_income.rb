class CreateIncome < ActiveRecord::Migration[5.1]
  def change
    create_table :incomes do |t|
      t.integer :amount
      t.string :attached_file
      t.string :description

      t.timestamps
    end
  end
end
