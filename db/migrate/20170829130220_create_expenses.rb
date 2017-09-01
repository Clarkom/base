class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.integer :amount
      t.string :attached_file
      t.text :description

      t.timestamps
    end
  end
end
