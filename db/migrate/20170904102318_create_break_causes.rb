class CreateBreakCauses < ActiveRecord::Migration[5.1]
  def change
    create_table :break_causes do |t|
      t.string :name

      t.timestamps
    end
  end
end
