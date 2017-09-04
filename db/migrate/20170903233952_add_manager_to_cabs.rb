class AddManagerToCabs < ActiveRecord::Migration[5.1]
  def change
    add_reference :cabs, :manager, foreign_key: true
  end
end
